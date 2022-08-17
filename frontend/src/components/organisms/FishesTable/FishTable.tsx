import React from "react";
import { Fish } from "../../../hooks";

import styles from "./FishesTable.module.css"

export interface UsersTableProps {
  /**
  * ユーザーのリスト
  */
  fishes: Fish[]
}

export const FishesTable: React.FC<UsersTableProps> = ({
  fishes
}) => {
  return (
      <table className={`${styles.table}`}>
        <thead>
          <tr>
            <th className={`${styles.th}`} style={{ width: 100 }}>id</th>
            <th className={`${styles.th}`} style={{ width: 100 }}>name</th>
            <th className={`${styles.th}`} style={{ width: 100 }}>th</th>
          </tr>
        </thead>
        <tbody>
          { fishes != null? (
              fishes.map((fish) => {
                return (
                  <tr>
                    <td className={`${styles.td}`}>{fish.id}</td>
                    <td className={`${styles.td}`}>{fish.name}</td>
                    <td className={`${styles.td}`}>test</td>
                  </tr>
                )
              })
            ): (<div>データが存在しません</div>)
          }
        </tbody>
      </table>    
  )
}