import { useState } from "react";
import { Option } from "./IncrementSearch";

export const useIncrementSearch = (
  path: (params: string) => string,
  selectAction: () => void, // when select val, exec func
) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [beforeVal, setBeforeVal] = useState<string>("");  
  const [selectedVal, setSelectedVal] = useState<Option>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (inputVal: string) => {
    setBeforeVal(inputVal);
    if (inputVal.length < 2) return;

    const searchData = {val: inputVal};
    const params = new URLSearchParams(searchData).toString();

    if (inputVal.length > 0 && beforeVal !== inputVal) {
      try {
        setIsLoading(true);

        const res = await fetch(path(params));
        const data = await res.json();
        let target: Option[] = [];
        for (let i = 0; i < data.length; i++) {
          target.push({
            label: data[i].name, 
            value: data[i].value,
          })
        }
        setOptions(target);
      } catch (e) {
        console.error(e);
      } finally{
        setIsLoading(false);
      }
    } else {
      setOptions([]); 
    }
  };

  const handleSelect = (e: React.SyntheticEvent<Element, Event>, val: Option) => {
    if (val === null) return;

    setSelectedVal(val);
    // action
    selectAction();
    setOptions([]); 
  };

  return {
    options,
    isLoading,
    selectedVal,
    handleSearch,
    handleSelect,
  };
};