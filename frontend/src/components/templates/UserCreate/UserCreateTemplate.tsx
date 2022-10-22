import { UserCreateForm } from "../../organisms/UserCreateForm/UserCreateForm";
import { Layout } from "../_Layout/Layout";

export const UserCreateTemplate = () => {
  return (
    <Layout isContainerDesign={true}>
      <UserCreateForm />  
    </Layout>
  );
};