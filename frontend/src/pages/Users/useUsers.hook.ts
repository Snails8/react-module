import { APIGetUsers } from '../../endpoint';
import { useFetch } from '../../hooks/useFecth';
import UsersJson from '../../mockData/json/Users.json';
import { User } from '../../types/user';

export const useUsers = () => {
  const users = process.env.IS_BACKEND ? getUsersFromAPI() : getUsersFromJson();

  return {
    users: users,
  };
};

const getUsersFromJson = (): User[] => {
  return UsersJson.users;
};

const getUsersFromAPI = (): User[] => {
  const {data, error, loading} = useFetch<User[]>(APIGetUsers);
  if (data === undefined) return [];

  return data;
};