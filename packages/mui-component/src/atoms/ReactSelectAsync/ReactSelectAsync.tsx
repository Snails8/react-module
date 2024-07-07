"use client"
import { ActionMeta, GroupBase, OptionsOrGroups, SingleValue } from 'react-select';
import AsyncSelect from 'react-select/async';
import { Option } from './useReactSelectAsync';

type SelectAsyncProps = {
  fetchOption: (input: string) => Promise<Option[] | undefined>,
  handleSelect: (val: SingleValue<Option>) => void,
  height?: number | string,
  borderColor?: string
}

/**
 * using react-select
 * if you input val, you get fetched-option
 * @returns 
 */
const SelectAsync = (props: SelectAsyncProps) => {
  const {fetchOption, handleSelect, height, borderColor="silver"} = props;

  return (
    <AsyncSelect
      styles={{ 
        control: (baseStyles: any, state: any) => ({
          ...baseStyles,
          height: height,
          borderColor: borderColor,
        }),
      }}
      cacheOptions
      defaultOptions
      placeholder={'商品名を入力してください'}
      loadOptions={fetchOption as (inputValue: string, callback: (options: OptionsOrGroups<Option, GroupBase<Option>>) => void) => void }
      onChange={(newVal: SingleValue<Option>, actionMeta: ActionMeta<Option>) => handleSelect(newVal)}
    />
  );
};

export default SelectAsync;

/**
  usage:
  const {fetchOption, handleSelect} = useReactSelectAsync();
  return (
    <SelectAsync fetchOption={fetchOption} handleSelect={handleSelect} />
  )
 */