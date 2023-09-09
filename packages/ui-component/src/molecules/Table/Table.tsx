import React, { FC } from 'react';
import styles from './Table.module.css';


type TableProps = {
  header: readonly string[],  
  body: any[][]  
}

const Table: FC<TableProps> = (props: TableProps) => {
  const {header, body} = props;
  return (
    <table className={styles.table} data-testid='calender-table'>
      <thead>
        <tr>
          {header.map((val: string, idx: number) => (
            <th className={styles.th} style={{ width: 100 }} key={idx+val}>
              {val}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row: any[], idx: number) => (
          <tr key={idx}>
            {row.map((val: any, idx: number) => (
              <td className={styles.td} key={idx+val}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
