import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { usePost } from "../../../hooks/usePost";
import { sampleFormSchema } from "../../../lib/validator/yup/sampleForm";

type InputVal = {
	name: string,
  age: number
	email: string,
  date: Date,
  gender: string,
  check: boolean[],
}

export const usePostForm = () => {
  const initialVal = {
    name: "",
    email: "",
  };

  const formMethods = useForm<InputVal>({
      mode: "onChange",
      defaultValues: initialVal,
      resolver: yupResolver(sampleFormSchema),
  });

  const handleSubmit = () => {
    const values = formMethods.getValues();
    const postData = {
      name: values.name,
      email: values.email,
      age: values.age,
      date: values.date,
      gender: values.gender,
      check: values.check,
    };

    const {loading, error, doPostRequest} = usePost();
    doPostRequest({
      method: 'post',
      path: '/',
      postData: postData,
    });
  };

  return {
    formMethods,
    handleSubmit,
  };
};