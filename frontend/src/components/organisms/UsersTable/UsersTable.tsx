import React from "react";
import { User } from "../../../hooks";

import styles from "./UsersTable.module.css"

// TODO::適切な型定義を行う
export interface UsersTableProps {
  /**
  * ユーザーのリスト
  */
  users: User[]
}

export const UsersTable: React.FC<UsersTableProps> = ({
  users
}) => {
  return (
      <table className={`${styles.table}`}>
        <thead>
          <tr>
            <th className={`${styles.th}`} style={{ width: 100 }}>id</th>
            <th className={`${styles.th}`} style={{ width: 100 }}>name</th>
            <th className={`${styles.th}`} style={{ width: 100 }}>email</th>
          </tr>
        </thead>
        <tbody>
          { users != null? (
              users.map((user) => {
                return (
                  <tr>
                    <td className={`${styles.td}`}>{user.id}</td>
                    <td className={`${styles.td}`}>{user.name}</td>
                    <td className={`${styles.td}`}>{user.email}</td>
                  </tr>
                )
              })
            ): (<div>ユーザーが存在しません</div>)
          }
        </tbody>
      </table>    
  )
}