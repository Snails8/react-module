import { memo } from 'react';
import { User, UserRole } from '../../../types/user';

import styles from './UsersTable.module.css';

// TODO:: jsonに移行した際に修正
const roleLabel = (role: string) => {
  switch (role) {
    case UserRole.Manager:
      return '部門管理者';
    case UserRole.Operator:
      return '一般ユーザー';
    default: // ロールは必ず付与されるので、このケースは実際には存在しない想定
      return '';
  }
};

type UsersTableProps = {
  users: User[];
};

export const UsersTable = memo((props: UsersTableProps) => {
  const { users } = props;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th} style={{ width: 100 }}>
            id
          </th>
          <th className={styles.th} style={{ width: 100 }}>
            名前
          </th>
          <th className={styles.th} style={{ width: 100 }}>
            email
          </th>
          <th className={styles.th} style={{ width: 100 }}>
            ユーザー識別
          </th>
        </tr>
      </thead>
      <tbody>
        {users != null ? (
          users.map((user) => {
            return (
              <tr className={styles.table_row} key={user.id}>
                <td className={styles.td}>{user.id}</td>
                <td className={styles.td}>{user.name}</td>
                <td className={styles.td}>{user.email}</td>
                <td className={styles.td}>{roleLabel(user.role)}</td>
              </tr>
            );
          })
        ) : (
          <div>ユーザーが存在しません</div>
        )}
      </tbody>
    </table>
  );
});
