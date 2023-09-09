import { FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
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
  row?: boolean // 横並びかどうか
  disabled?: boolean
}

// https://mui.com/material-ui/react-radio-button/
const ControlRadio = <T extends Obj>(props: ControlSelectProps<T>) => {
  const {name, options, control, label='', defaultValue, width=200, row, disabled} = props;

  return (
    <Controller
      control={control}
      name={name as Path<T>}
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={!!fieldState.error?.message} sx={{ minWidth: width }}>
          {label && <FormLabel id={name}>{label}</FormLabel>}
          <RadioGroup 
            name={name} 
            value={field.value} 
            defaultValue={defaultValue}
            aria-labelledby={name}
            row={row}
          >
            {Object.values(options).map((item: any) => (
              <FormControlLabel 
                {...field} 
                value={item.value} 
                label={item.label} 
                key={item.value} 
                control={<Radio />}
                disabled={disabled} 
              />
            ))}
          </RadioGroup>
          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>          
      )}
    />
  );
};

export default ControlRadio;