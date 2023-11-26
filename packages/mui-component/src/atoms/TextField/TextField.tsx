import {
  FormHelperText,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

export type TextFieldProps = MuiTextFieldProps & {
  inputRef?: MuiTextFieldProps["ref"];
  errorMessage?: string;
};

export default function TextField({
  inputRef,
  errorMessage,
  ...rest
}: TextFieldProps) {
  return (
    <>
      <MuiTextField ref={inputRef} error={!!errorMessage} {...rest} />
      {!!errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </>
  );
};