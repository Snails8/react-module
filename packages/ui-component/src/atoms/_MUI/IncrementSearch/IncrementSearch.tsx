import { Autocomplete, TextField } from "@mui/material"
import { debounce } from "lodash";

export type Option = {
  readonly value: string;
  readonly label: string;
}

type Obj = {
  [x: string]: any
};

type SelectProps<T extends Obj>  = {
  options: Option[]
  handleSearch: (putVal: any) => Promise<void>
  handleSelect: (event: React.SyntheticEvent<Element, Event>, selectedVal: any) => void
  placeholder?: string
  isLoading?: boolean
  selectedVal?: Option,
  label?: string,
  width?: number,
}

// using lodash
const SelectIncrementalSearch = <T extends Obj> (props: SelectProps<T>) => {
  const { options, selectedVal, handleSearch, handleSelect, placeholder, isLoading=false, label='', width} = props;

  const term = 750;
  const handleDebounceSearch = debounce((changeValue: any) => 
    handleSearch(changeValue),
    term
  );

  return (
    <Autocomplete
      fullWidth
      key={selectedVal?.label ?? null} // 入力後、値をリセットするときは設定する
      options={options}
      loading={isLoading}
      onChange={handleSelect}
      onInputChange={(e, changeValue) => {
        handleDebounceSearch(changeValue);
      }}
      filterOptions={(options) => options}
      isOptionEqualToValue={(option, v) =>
        option.label === v.label
      }
      renderInput={(params) => 
        <TextField
          {...params as any} 
          label={label}
          placeholder={placeholder}
        />
      }
      sx={{ width: width }}
    />
  );
};

export default SelectIncrementalSearch;
/**

usage: prepare api

  const path = APISearchFoo();
  const { options, isLoading, selectedVal, handleSearch, handleSelect} = useIncrementSearch(path, () => {});
  return (
    <IncrementSearch options={options} handleSearch={handleSearch} handleSelect={handleSelect} isLoading={isLoading} selectedVal={selectedVal} /> 
  )
  */