import { memo } from "react";
import { Link } from "react-router-dom";
import { User } from "../../../../types/user";

import styles from "./UserMenu.module.css";

type UserMenuProps = {
  user: User
}

export const UserMenu = memo((props: UserMenuProps) => {
  const {user} = props;

  return (
    <div className={styles.container}>
      <div className={styles.user_container}>
        <b className={styles.user_name}>{user.name}</b>
        <span>{`(${user.role})`}</span>
      </div>
      <div className={styles.email_container}>
        <span>{user.email}</span>
      </div>
      <div className={styles.link_container}>
        <Link to={`/users/${user.id}`}>アカウントを管理</Link>
      </div>
      <div className={styles.logout_container}>
        <div className={styles.logout_button} onClick={() => console.log()}>
          ログアウト
        </div>
      </div>
    </div>
  );
});