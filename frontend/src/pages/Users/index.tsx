import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsersSearchForm } from '../../components/organisms/UsersSearchForm/UsersSearchForm';
import { UsersTable } from '../../components/organisms/UsersTable/UsersTable';
import { Layout } from '../../components/templates/_Layout/Layout';
import { User } from '../../types/user';
import { useUsers } from './useUsers.hook';

type SearchParams = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export const Users = () => {
  const { users } = useUsers();

  console.log(users);

  const navigate = useNavigate();
  const query = (params: SearchParams) => {
    return `?users?id?=${params.id}&name=${params.name}&email=${params.email}&role=${params.role}`;
  };
  const onClickButton = (user: User) => {
    navigate({
      pathname: '/users',
      search: query(user),
    });
  };

  const [name, setName] = useState('');
  const inputUserNameHandler = (value: string) => setName(value);

  const handleClick = () => {
    console.log('test');
  };

  const checkHandler = (checked: boolean) => console.log(checked);

  return (
    <>
      <Layout isContainerDesign={true}>
        <Link to="/users/create">作成</Link>
        <UsersSearchForm
          inputUserNameHandler={inputUserNameHandler}
          checkHandler={checkHandler}
          handleClick={onClickButton}
        />
        <UsersTable users={users} />
      </Layout>
    </>
  );
};
