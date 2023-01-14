import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { usePost } from "../../../hooks/usePost";
import { sampleFormSchema } from "../../../lib/validator/yup/sampleForm";

type InputVal = {
	name: string,
	email: string,
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