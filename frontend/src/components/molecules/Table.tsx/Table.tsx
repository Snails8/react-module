import React from "react";


import styles from "./UsersTable.module.css"

export const UsersTable: React.FC = ({

}) => {
  return (
      <table className={`${styles.table}`}>
        <thead>
          <tr>
            <th className={`${styles.th}`} style={{ width: 100 }}>th</th>
            <th className={`${styles.th}`} style={{ width: 100 }}>th</th>
            <th className={`${styles.th}`} style={{ width: 100 }}>th</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${styles.td}`}>td</td>
            <td className={`${styles.td}`}>td</td>
            <td className={`${styles.td}`}>td</td>
          </tr>
          <tr>
            <td className={`${styles.td}`}>td</td>
            <td className={`${styles.td}`}>td</td>
            <td className={`${styles.td}`}>td</td>
          </tr>
        </tbody>
      </table>    
  )
}