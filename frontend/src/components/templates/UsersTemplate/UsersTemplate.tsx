import { Link } from "react-router-dom";
import { User } from "../../../hooks/useUsers";
import { UsersTable } from "../../organisms/UsersTable/UsersTable";
import { Layout } from "../_Layout/Layout";

type UsersTemplateProps = {
  users: User[]
}

export const UsersTemplate = (props: UsersTemplateProps) => {
  const users = props.users;

  return (
    <Layout isContainerDesign={true}>
    <Link to="/users/create">作成</Link>
      <UsersTable 
        users={users}
      />  
    </Layout>
  );
};