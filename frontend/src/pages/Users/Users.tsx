import { UsersTable } from "../../components/organisms/UsersTable/UsersTable";

import UsersJson from "./../../hooks/Json/Users.json";
import { useEffect, useState } from 'react';

import {
  User,
  useUsers
} from '../../hooks';
import { Link, useLocation } from "react-router-dom";
import { Layout } from "../../components/templates/_Layout/Layout";

export const Users:React.FC = () => {
  const location = useLocation()
  const [isSave, setIsSave] = useState<{isSave: boolean}>(location.state as {isSave: boolean})

  useEffect(() => {
    if(location.state) {
      console.log(location.state)
      setIsSave({isSave: true})
    } else {
      setIsSave({isSave: false})
    }
  },[])
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

  const users = UsersJson.users;

    return (
        <>
          <Layout>
          {isSave?.isSave === true ?
            <h5>成功</h5> : ''
          }
          <Link to="/users/create">作成</Link>
            <UsersTable 
              users={users}
            />  
          </Layout>
        </>
    )
}