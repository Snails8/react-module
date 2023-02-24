import { useForm } from "react-hook-form";

export const useSelectInput = () => {

  const { control, handleSubmit, setValue, getValues } = useForm({
    mode: 'onChange',
    defaultValues: {
      single: {},
      multi: [],
    },
  });

  const option = [
    { label: 'test', value: '1',},
    { label: 'test2', value: '2',},
    { label: 'test3', value: '3',},
  ];


  const handleInput = (val : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // console.log(val.target.value);
    // console.log(options);
  }

  return {
    option,
    control,
    handleSubmit,
    setValue
  }
}