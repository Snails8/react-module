import React from 'react';
import { eatType, Fish, habitatType } from '../../../hooks';

import styles from './FishesTable.module.css';

export interface UsersTableProps {
  /**
   * ユーザーのリスト
   */
  fishes: Fish[];
}

const habitatLabel = (role: string) => {
  switch (role) {
    case habitatType.River:
      return '川';
    case habitatType.Sea:
      return '海';
    default: // ロールは必ず付与されるので、このケースは実際には存在しない想定
      return '';
  }
};

const typeLabel = (role: string) => {
  switch (role) {
    case eatType.Omnivorous:
      return '草食';
    case eatType.Carnivorous:
      return '肉食';
    default: // ロールは必ず付与されるので、このケースは実際には存在しない想定
      return '';
  }
};

export const FishesTable: React.FC<UsersTableProps> = ({ fishes }) => {
  return (
    <table className={`${styles.table}`}>
      <thead>
        <tr>
          <th className={`${styles.th}`} style={{ width: 100 }}>
            id
          </th>
          <th className={`${styles.th}`} style={{ width: 100 }}>
            name
          </th>
          <th className={`${styles.th}`} style={{ width: 100 }}>
            type
          </th>
          <th className={`${styles.th}`} style={{ width: 100 }}>
            habitat
          </th>
          <th className={`${styles.th}`} style={{ width: 100 }}>
            レッドリスト
          </th>
        </tr>
      </thead>
      <tbody>
        {fishes != null ? (
          fishes.map((fish) => {
            return (
              <tr>
                <td className={`${styles.td}`}>{fish.id}</td>
                <td className={`${styles.td}`}>{fish.name}</td>
                <td className={`${styles.td}`}>{typeLabel(fish.type)}</td>
                <td className={`${styles.td}`}>{habitatLabel(fish.habitat)}</td>
                <td className={`${styles.td}`}>{fish.endangeredStatus}</td>
              </tr>
            );
          })
        ) : (
          <div>データが存在しません</div>
        )}
      </tbody>
    </table>
  );
};
