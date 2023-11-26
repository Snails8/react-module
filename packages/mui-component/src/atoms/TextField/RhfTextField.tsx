import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import TextField, { TextFieldProps } from "./TextField";

export type RfhTextFieldProps<T extends FieldValues>  = TextFieldProps & UseControllerProps<T>;

export default function RfhTextField<T extends FieldValues>(props: RfhTextFieldProps<T>) {
  const { name, control } = props;
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController<T>({ name, control });

  return (
    <TextField
      {...inputProps}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
    />
  )
}