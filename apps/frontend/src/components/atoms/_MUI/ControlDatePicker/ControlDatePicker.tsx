import { FormControl, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Control, Controller, Path, UseFormTrigger } from "react-hook-form";


type Obj = {
  [x: string]: any
};

type ControlDatePickerProps<T extends Obj>  = {
  name: string,
  control: Control<T, any>,
  trigger:  UseFormTrigger<T>,
  width?: number
  format?: 'YYYY/MM/DD' | 'YYYY年MM月DD日' | 'YYYY年MM月'
}

export const ControlDatePicker = <T extends Obj> (props: ControlDatePickerProps<T>) => {
  const {name, control, trigger, width={}, format='YYYY/MM/DD' } = props;

  return (
    <FormControl fullWidth>
      <Controller
        control={control}
        name={name as Path<T>}
        render={({ field, fieldState }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              {...field}
              inputFormat={format}
              onChange={(e) => {
                field.onChange(e);
                void trigger();
              }}
              renderInput={(params) => 
                <TextField 
                  {...params} 
                  error={!!fieldState.error?.message} 
                  helperText={fieldState.error?.message} 
                  sx={{ minWidth: width }} 
                />
              }
            />
          </LocalizationProvider>
        )}
      />
    </FormControl>
  );
};
