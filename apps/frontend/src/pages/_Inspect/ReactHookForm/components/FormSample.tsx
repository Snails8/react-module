import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type InputValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export const FormSample1 = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
  });

  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputValues>({
    resolver: yupResolver(schema),
    mode: 'onChange', // 'onBlur', 'onChange', 'onTouched', 'all' から選択可能。defaultは onSubmit
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First Name" />
      <p>{errors.firstName?.message}</p>

      <input {...register("lastName")} placeholder="Last Name" />
      <p>{errors.lastName?.message}</p>

      <input {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>

      <input type="submit" />
    </form>
  );
};