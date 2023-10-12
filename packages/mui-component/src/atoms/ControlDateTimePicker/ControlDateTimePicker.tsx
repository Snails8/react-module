import { FormControl, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Control, Controller, Path, UseFormTrigger } from "react-hook-form";
import { DateTimePicker } from "@mui/x-date-pickers";


type Obj = {
  [x: string]: any
};

type Props<T extends Obj>  = {
  name: string,
  control: Control<T, any>,
  trigger:  UseFormTrigger<T>,
  minDate?: Date | null,
  disablePast?: boolean,
  style?: any
  fontSize?: number,
}

export const ControlDateTimePicker = <T extends Obj> (props: Props<T>) => {
  const {name, control, trigger, style={}, fontSize=undefined,minDate={}, disablePast=false } = props;

  return (
    <FormControl fullWidth>
      <Controller
        control={control}
        name={name as Path<T>}
        render={({ field, fieldState }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              {...field}
              onChange={(e) => {
                field.onChange(e);
                void trigger();
              }}
              minDate={minDate}
              disablePast={disablePast}
              views={['year', 'month', 'day', 'hours']}
              renderInput={(params) => 
                <TextField 
                  {...params} 
                  error={!!fieldState.error?.message} 
                  helperText={fieldState.error?.message} 
                  sx={style}
                />
              }
            />
          </LocalizationProvider>
        )}
      />
    </FormControl>
  );
};
