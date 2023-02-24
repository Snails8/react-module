import { CheckBox } from "@mui/icons-material";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import { Control, Controller, FieldErrorsImpl, Path } from "react-hook-form";

type Obj = {
  [x: string]: any
};

export type DropdownOption<T> = {
  label: string
  value: T
}

type ControlSelectProps<T extends Obj>  = {
  name: string,
  options: DropdownOption<T>[],
  errors: Partial<FieldErrorsImpl<{[x: string]: any}>>, 
  control: Control<T, any>,
  label?: string,
  defaultValue?: string | number,
  width?: number
  row?: boolean       // 横並びかどうか
  disabled?: boolean
}

// https://mui.com/material-ui/react-checkbox/
export const ControlCheckbox = <T extends Obj>(props: ControlSelectProps<T>) => {
  const {name, options, control, errors, label='', defaultValue, width=200, row, disabled} = props;

  return (
    <FormControl fullWidth error={errors.checkerr !== undefined}>
      { label && <span>{label}</span> }
      <FormGroup>
        { options.map((item: any, idx: number) => (
          <Controller
            key={idx}
            name={`${name}.${idx}` as Path<T>}
            control={control}
            render={({ field }) => (
              <FormControlLabel label={item.label} control={<Checkbox {...field} checked={field.value} disabled={disabled} />} />
            )}
          />
        ))}
      </FormGroup>
      <FormHelperText>{errors.checkerr?.message as string}</FormHelperText>
    </FormControl>
  );
};