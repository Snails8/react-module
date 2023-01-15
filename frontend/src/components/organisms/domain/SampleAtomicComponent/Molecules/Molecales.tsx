import { Textarea } from '../../../../atoms/form/Textarea/Textarea';
import styles from './Molecules.module.css';
import { ReactNode } from 'react';
import { Table } from '../../../../molecules/ui/Table/Table';
import { CellTable } from '../../../../molecules/ui/CellTable/CellTable';

type ContentProps = {
  label: string,
  children: ReactNode,
}

const Content = (props: ContentProps) => {
  const {label, children} = props;
  return (
    <div className={styles.content}>
      <h5>{label}</h5>
      {children}
    </div>
  );
};

export const Molecules = () => {

  const header = ['th1', 'th2', 'th3'] as const;
  const body = [
    ['1a', '1b', '1c'],
    ['2a', '2b', '2c'],
    ['3a', '3b', '3c'],
  ];

  return (
    <>
      <h2>form item</h2>
      <div className={styles.item}>
        <Content label="table">
          <Table header={header} body={body}/>
        </Content>
        
        <Content label="cellTable">
          <CellTable />
        </Content>
      </div>

      <div className={styles.item}>
        
      </div>
    </>
  );
};
