
import { UsersTemplate } from "../../components/templates/UsersTemplate/UsersTemplate";
import { useUsers } from "../../hooks";

export const Users = () => {
  const users = useUsers();

  return (
    <>
      <UsersTemplate users={users.users} />
    </>
  );
};