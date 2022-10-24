import { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../../hooks/useUsers";
import { UsersSearchForm } from "../../organisms/UsersSearchForm/UsersSearchForm";
import { UsersTable } from "../../organisms/UsersTable/UsersTable";
import { Layout } from "../_Layout/Layout";
import styles from "./UsersTemplate.module.css";

type UsersTemplateProps = {
  users: User[]
}

export const UsersTemplate = (props: UsersTemplateProps) => {
  const users = props.users;

  const [name, setName] = useState('');
  const inputUserNameHandler = (value: string) => setName(value);

  const handleClick = () => {
    console.log('test');
  };

  const checkHandler = (checked: boolean) => console.log(checked);

  return (
    <Layout isContainerDesign={true}>
      <Link to="/users/create">作成</Link>
      <div className={styles.search_container}>
        <UsersSearchForm inputUserNameHandler={inputUserNameHandler} checkHandler={checkHandler} handleClick={handleClick} />
      </div>
      <UsersTable 
        users={users}
      />  
    </Layout>
  );
};