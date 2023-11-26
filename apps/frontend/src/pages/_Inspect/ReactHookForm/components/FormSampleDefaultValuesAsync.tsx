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

export function ReactHookFormDefaultValuesAsync() {
  const { register, setValue, handleSubmit, watch, formState: { errors }, getValues } = useForm<InputValues>({
    mode: 'onChange', // 'onBlur', 'onChange', 'onTouched', 'all' から選択可能。defaultは onSubmit
  });
  useEffect(() => {
    // 非同期関数を定義
    const fetchAsyncData = async () => {
      try {
        // setTimeoutを使用して非同期操作をシミュレート
        const asyncData = await new Promise<InputValues>((resolve) => {
          setTimeout(() => {
            const data: InputValues = { 
              name: "test async", 
              email: "test-async@test.com", 
              age: 10, 
              gender: "Male", 
              hobbies: ["Reading"]
            };
            resolve(data);
          }, 1000); // 1秒の遅延
        });
  
        // setValueを使用してフォームの状態を更新
        setValue('name', asyncData.name);
        setValue('email', asyncData.email);
        setValue('age', asyncData.age);
        setValue('gender', asyncData.gender);
        setValue('hobbies', asyncData.hobbies);
      } catch (error) {
        console.error(error);
      }
    };
  
    // 非同期関数を実行
    fetchAsyncData();
  }, [setValue]);
  

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