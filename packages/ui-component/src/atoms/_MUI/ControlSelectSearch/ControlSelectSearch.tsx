import { Autocomplete, TextField } from "@mui/material"
import { Control, Controller, Path, SetFieldValue } from "react-hook-form";

type Obj = {
  [x: string]: any
};
type SelectProps<T extends Obj>  = {
  name: string,
  options: any   // TODO::label, valのみ受け付ける作りにする(優先上後回し)
  control: Control<T, any>,
  label?: string
  defaultValue?: string | number,
  width?: number
  onChange?: (val : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> ) => void,
  setValue: SetFieldValue<T>
}

/**
 * Input で検索できるcomponent
 * @param props 
 * @returns 
 */
const SelectInput = <T extends Obj> (props: SelectProps<T>) => {
  const {name, options, control, setValue, label='', defaultValue, width=200, onChange= () => {} } = props;

  return (
    <Controller
      control={control}
      name={name as Path<T>}
      render={({ field }) => (
        <Autocomplete
          fullWidth
          options={options}
          renderInput={(params) => <TextField {...params as any} label={label} onChange={(val) => onChange(val)} />}
          onChange={(event, value) => {
            setValue('single', value, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            })
          }}
        />
      )}
    />
  );
};

export default SelectInput;

/**
 * usage
 * 
 * 
  const {control, options, setValue} = useSelectInput();
  return (
    <SelectInput control={control} setValue={setValue} name={'test'} options={options} /> 
  )

 */