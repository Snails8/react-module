import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { Control, Controller, Path } from "react-hook-form";

type Obj = {
  [x: string]: any
};

export type DropdownOption<T> = {
  label: string
  value: T
}

type ControlSelectProps<T extends Obj>  = {
  name: string,
  options: DropdownOption<T>[] 
  control: Control<T, any>,
  label?: string,
  defaultValue?: string | number,
  width?: number
  disabled?: boolean
}

export const ControlSelect = <T extends Obj>(props: ControlSelectProps<T>) => {
  const {name, options, control, label='', defaultValue, width=200, disabled} = props;

  return (
    <Controller
      control={control}
      name={name as Path<T>}
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={!!fieldState.error?.message} sx={{ minWidth: width }}>
          {label && <InputLabel id={name}>{label}</InputLabel>}
          <Select {...field} defaultValue={defaultValue} disabled={disabled} labelId={name}>
            {Object.values(options).map((item: any) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>          
      )}
    />
  );
};
