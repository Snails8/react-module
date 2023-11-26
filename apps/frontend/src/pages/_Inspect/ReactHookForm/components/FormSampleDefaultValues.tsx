import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, set, useForm } from 'react-hook-form';
import * as yup from 'yup';

type InputValues = {
  name: string;
  email: string;
  age: number;
  gender: "Male" | "Female";
  hobbies: string[] | [];
};

const errorMsgStyle = { color: "red" };

export function ReactHookFormDefaultValues() {
  const schema = yup.object().shape({
    name: yup.string().required('名前は必須です'),
    email: yup.string().email('正しい形式で入力してください').required('メールアドレスは必須です'),
    age: yup.number().required("入力は必須です").positive('整数を入力してください').integer(),
    gender: yup.string().required("入力は必須です").nullable(),
    hobbies: yup.array().of(yup.string()).min(1, "少なくとも一つの趣味を選択してください").required("入力は必須です").nullable(),
  });

  const data: InputValues = { name: "test", email: "test@test.com", age: 10, gender: "Male", hobbies: ["Reading"]};
  const { register, setValue, handleSubmit, watch, formState: { errors }, getValues } = useForm<InputValues>({
    resolver: yupResolver(schema),
    mode: 'onChange', // 'onBlur', 'onChange', 'onTouched', 'all' から選択可能。defaultは onSubmit
    defaultValues: data
  });
  const onSubmit: SubmitHandler<InputValues> = (data) => console.log("onsubmit", data);
  
  console.log(watch("name"));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("name")} placeholder="名前" />
          {errors.name && <p style={errorMsgStyle}>{errors.name.message}</p> }
        </div>

        <div>
          <input {...register("email")} placeholder="Email" />
          {errors.email && <p style={errorMsgStyle}>{errors.email.message}</p> }
        </div>

        <select {...register("age")}>
          { Array.from(Array(100).keys()).map((i) => <option key={i} value={i}>{i}</option>) }
        </select>
        {errors.age && <p style={errorMsgStyle}>{errors.age.message}</p> }

        <div>
          <label>
            <input type='radio' value="Male" {...register("gender")} />
            男性
          </label>
          <label>
            <input type='radio' value="FeMale" {...register("gender")} />
            女性
          </label>
        </div>
        { errors.gender && <p style={errorMsgStyle}>{errors.gender.message}</p>}

        <div>
          <label>
            <input type="checkbox" value="Reading" {...register("hobbies")} />
            Reading
          </label>
          <label>
            <input type="checkbox" value="Gaming" {...register("hobbies")} />
            Gaming
          </label>
        </div>
        <p style={errorMsgStyle}>{errors.hobbies?.message}</p>

        <input type="submit" />
      </form>
    </>
  );
};