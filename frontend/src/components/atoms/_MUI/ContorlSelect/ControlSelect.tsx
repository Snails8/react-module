import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
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
  width?: number
}

export const ControlSelect = <T extends Obj>(props: ControlSelectProps<T>) => {
  const {name, options, control, width=200 } = props

  return (
    <Controller
      control={control}
      name={name as Path<T>}
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={!!fieldState.error?.message} sx={{ minWidth: width }}>
          <Select {...field}>
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
