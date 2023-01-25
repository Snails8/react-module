import { useState } from "react";
import { SingleValue } from "react-select";

export interface Option {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}


/**
 * using react-select
 * @param endpoint 
 * @returns 
 */
export const useReactSelectAsync = (
  endpoint: string
) => {
  const [option, setOption] = useState<Option[]>([]);

  const fetchOption = async (inputVal: string):  Promise<Option[] | undefined> => {
    if (inputVal.length < 2) return;

    const searchData = {
      val: inputVal
    };
    const params = new URLSearchParams(searchData).toString();
    
    try {
      const res = await fetch('path'); // ここにpath 
      const data = await res.json();
      
      let target: Option[] = [];
      for (let i = 0; i < data.length; i++) {
        target.push({
          label: data[i].name, 
          value: data[i].id,
        })
      }
      setOption(target);
    } catch (e) {
      console.error('error:', e);
    } finally {
      return option;
    }
  }

  const handleSelect = (val: SingleValue<Option>) => {
    const listItem = {
      name: val?.label ?? "",
      id: val?.value ?? "",
    }
  
  }

  return {
    fetchOption,
    handleSelect,
  };
};

