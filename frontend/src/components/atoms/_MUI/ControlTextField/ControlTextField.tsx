import { FormControl, InputBaseComponentProps, TextField } from "@mui/material";
import { Control, Controller, Path, UseFormTrigger } from "react-hook-form";

type Obj = {
  [x: string]: any
};

type ControlTextFieldProps<T extends Obj>  = {
  name: string,
  type?: 'text' | 'number' | 'email',
  control: Control<T, any>,
  trigger:  UseFormTrigger<T>,
  label?: string 
  width?: number
  inputProps?: InputBaseComponentProps
}

export const ControlTextField = <T extends Obj>(props: ControlTextFieldProps<T>) => {
  const {name, type = 'text', control, trigger, label=null, inputProps={}, width={}} = props;

  return (
    <FormControl fullWidth>
      <Controller
        control={control}
        name={name as Path<T>}
        render={({ field, fieldState }) => (
          <>
            <TextField
              {...field}
              type={type}
              label={label}
              helperText={fieldState.error?.message}
              error={!!fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e);
                void trigger();
              }}
              inputProps={inputProps}
              sx={{ minWidth: width }}
            />
          </>
        )}
      />
    </FormControl>
  );
};