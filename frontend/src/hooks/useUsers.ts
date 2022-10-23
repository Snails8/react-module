import { useCallback, useEffect, useState } from 'react';
import UsersJson from "./Json/Users.json";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id: number;

    /**
     * 
     * @type {string}
     * @memberof User
     */
    name: string;

        /**
     * 
     * @type {string}
     * @memberof User
     */
    email: string;

    role: string
}

export enum UserRole  {
  Manager = 'manager',
  Operator = 'operator'
};

export const useUsers = () => {
  const users = process.env.IS_BACKEND ? getUsersFromAPI() : getUsersFromJson();

  return {
    users: users
  };
};

const getUsersFromJson = (): User[] => {
  return UsersJson.users;
};

const getUsersFromAPI = ():User[] => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // const url = 'http://localhost:7001/api/v1/users'
    // const options: AxiosRequestConfig = {
    //     url: url,
    //     method: "GET"
    // }

    // axios(options)
    //     .then((res: AxiosResponse<User[]>) => {
    //         const {data, status} = res
    //         setUsers(data)

    //         // data.map((user) => {
    //         //     const userdata = {name: user.name, id: user.id}
    //         //     users.push(userdata)
    //         // })
    //         // setUsers(users)
    //     })
    //     .catch((e: AxiosError<{ error: string }>) => {
    //         console.log(e.message);
    //     });

    fetch('http://localhost:7001/api/v1/users',{
        method: 'GET'
    })
    .then(res => res.json())
    .then((data) => {
        setUsers(data);
    },
    (error) => {
        console.log(error);
        const errData = {
        };
    });
  }, []);

  return users;
};

  // TODO::コンパイルを通すため一時的にany
  // 解消方法はfetch の型がany になってしまうのでその修正
  // const users = useUsers();
  // const [users, setUsers] = useState<User[]>([]);
  
  // useEffect(() => {
  //     fetch('http://localhost:7001/api/v1/users',{
  //         method: 'GET'
  //     })
  //     .then(res => res.json())
  //     .then((data) => {
  //       setUsers(data.users)
  //     },
  //     (error) => {
  //         console.log(error);
  //         const errData = {
  //         }
  //     })
  // }, [])