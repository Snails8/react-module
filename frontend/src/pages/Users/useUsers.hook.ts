import { APIGetUsers } from '../../endpoint';
import { useFetch } from '../../hooks/useFetch';
import UsersJson from '../../mockData/json/Users.json';
import { User } from '../../types/user';

export const useUsers = () => {
  const users = getUsersFromAPI();

  return {
    users,
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