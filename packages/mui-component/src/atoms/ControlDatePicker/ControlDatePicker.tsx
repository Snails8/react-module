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
  minDate?: Date | null,
  disablePast?: boolean,
  style?: any
  fontSize?: number,
  format?: 'YYYY/MM/DD' | 'YYYY年MM月DD日' | 'YYYY年MM月'
}

const ControlDatePicker = <T extends Obj> (props: ControlDatePickerProps<T>) => {
  const {name, control, trigger, style={}, fontSize=undefined,minDate={},format='YYYY/MM/DD', disablePast=false } = props;

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
              minDate={minDate}
              disablePast={disablePast}
              renderInput={(params) => 
                <TextField 
                  {...params} 
                  error={!!fieldState.error?.message} 
                  helperText={fieldState.error?.message} 
                  sx={style} 
                  // InputProps={{ 
                  //   style: {
                  //     fontSize: fontSize,
                  //   },
                  // }}
                />
              }
            />
          </LocalizationProvider>
        )}
      />
    </FormControl>
  );
};

export default ControlDatePicker;