import styles from './TableCell.module.css';

export type BodyItem = {
  label: string
  value: any[]
}

type TableCellProps ={
  headers: string[],
  items: BodyItem[]
}

export const TableCell = (props: TableCellProps) => {
  const {headers, items} = props;
  return (
    <table className={styles.table} data-testid='cell-table'>
      <thead>
        <tr>
          <th className={styles.header}></th>
          {headers.map((val: string) => (
            <th className={styles.header} key={val+'header'}>
              {val}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((row: BodyItem, rowIdx: number) => (
          <tr>
            <th className={styles.body} key={rowIdx}>{row.label}</th>
            {row.value.map((val: any, idx: number) => (
              <td className={styles.body} key={rowIdx+idx}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

/**

usage:

  const cellHeaders = ['2/2', '2/3', '2/4', '2/5', '2/6'];
  const bodyItem = [
    {label: 'sample1', value: [1, 2, 3, 4, 5]},
    {label: 'sample2', value: [1, 2, 3, 4, 5]},
    {label: 'sample3', value: [1, 2, 3, 4, 5]},
    {label: 'sample4', value: [11, 12, 13, 14, 15]},
  ];

  return (
    <TableCell headers={cellHeaders} items={bodyItem}/>
  );


 */