import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, set, useForm } from 'react-hook-form';
import * as yup from 'yup';

type InputValues = {
  name: string;
  hobbies: string[] | [];
};

const errorMsgStyle = { color: "red" };

export function ReactHookFormDefaultValuesAsync3() {
  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm<InputValues>({
    mode: 'onChange', // 'onBlur', 'onChange', 'onTouched', 'all' から選択可能。defaultは onSubmit
    defaultValues: {
      name: "aaa",
      hobbies: []
    }
  });

  const [options, setOptions] = useState<string[]>();
  useEffect(() => {
    // 趣味を取得する非同期関数を定義
    const fetchAsyncData = async () => {
      try {
        const asyncData = await new Promise<string[]>((resolve) => {
          setTimeout(() => {
            const data: string[] = ["fetchOption1", "fetchOption2", "fetchOption3"];
            resolve(data);
          }, 2000); 
        });
        setOptions(asyncData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAsyncData();
  }, []);


  useEffect(() => {
    const fetchAsyncData = async () => {
      try {
        const asyncData = await new Promise<InputValues>((resolve) => {
          setTimeout(() => {
            const data: InputValues = { 
              name: "test async-reset", 
              hobbies: ["fetchOption1"]
            };
            resolve(data);
          }, 1000); // 1秒の遅延
        });
  
        // setValueを使用してフォームの状態を更新
        reset(asyncData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAsyncData();
  }, [reset]);
  

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
          {options?.map((option) => (
            <label key={option}>
              <input type="checkbox" value={option} {...register("hobbies")} />
              {option}
            </label>
          ))}
        </div>
        <p style={errorMsgStyle}>{errors.hobbies?.message}</p>

        <input type="submit" />
      </form>
    </>
  );
};