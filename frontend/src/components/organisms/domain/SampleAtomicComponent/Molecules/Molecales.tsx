import styles from './Molecules.module.css';
import { ReactNode } from 'react';
import { Table } from '../../../../molecules/ui/Table/Table';
import { TableCell } from '../../../../molecules/ui/TableCell/TableCell';
import { TwinItem } from '../../../../molecules/design/TwinItem/TwinItem';
import { SampleTabContent, Tab } from '../../../../molecules/ui/Tab/Tab';
import { useTabSelect } from '../../../../molecules/ui/Tab/useTabSelect';

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

  const cellHeaders = ['2/2', '2/3', '2/4', '2/5', '2/6'];
  const bodyItem = [
    {label: 'sample1', value: [1, 2, 3, 4, 5]},
    {label: 'sample2', value: [1, 2, 3, 4, 5]},
    {label: 'sample3', value: [1, 2, 3, 4, 5]},
    {label: 'sample4', value: [11, 12, 13, 14, 15]},
  ];

  const {tabIdx, handleSelect} = useTabSelect();
  return (
    <>
      <h2>UI</h2>
      <div className={styles.item}>
        <Content label="table">
          <Table header={header} body={body}/>
        </Content>
        
        <Content label="cellTable">
          <TableCell headers={cellHeaders} items={bodyItem}/>
        </Content>
      </div>

      <div className={styles.item}>
        <Content label="tab">
          <Tab headers={['test1', 'test2', 'test3', 'test4']} selected={tabIdx} handleSelected={handleSelect}>
            <SampleTabContent selected={tabIdx}/>
          </Tab>
        </Content>
      </div>

      <h2>design</h2>
      <div className={styles.item}>
        <Content label="table">
          <TwinItem label='twin-label'>twin-value</TwinItem>
        </Content> 
      </div>
    </>
  );
};