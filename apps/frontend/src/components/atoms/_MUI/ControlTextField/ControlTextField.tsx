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
  variant?: "outlined" | "filled" | "standard"
  label?: string
  multiline?: boolean 
  width?: number
  inputProps?: InputBaseComponentProps
}

export const ControlTextField = <T extends Obj>(props: ControlTextFieldProps<T>) => {
  const {name, type = 'text', control, trigger, variant="outlined", label=null, multiline=false,inputProps={}, width={}} = props;

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
              variant={variant}
              helperText={fieldState.error?.message}
              error={!!fieldState.error?.message}
              onChange={(e) => {
                field.onChange(e);
                void trigger();
              }}
              multiline={multiline}
              inputProps={inputProps}
              sx={{ minWidth: width }}
            />
          </>
        )}
      />
    </FormControl>
  );
};

/**
 * usage:

  -- step1: parent component -- 
  const {formMethods, handleSubmit} = usePostForm();

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(() => handleSubmit)}>
        <Child Component />
        <Button label="送信" handleClick={handleSubmit} />
      </form>
    </FormProvider>
  )


  --- step2: child component --

  const {control, trigger, formState: {errors}} = useFormContext();
  return (
    <ControlTextField label="名前" name="name" control={control} trigger={trigger} />
  )
 */