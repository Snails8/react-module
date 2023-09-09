import styles from './Molecules.module.css';
import { ReactNode } from 'react';
import { Table } from '@module/ui-component';
import { TableCell } from '@module/ui-component';
import { TwinItem } from '@module/ui-component';
import { Tab } from '@module/ui-component';
import { useTab } from '@module/ui-component';
import { Button } from '@module/ui-component';
import { useModal } from '@module/ui-component';
import { Modal } from '@module/ui-component';
import { NotificationField } from '@module/ui-component';
import { PageHeader } from '@module/ui-component';
import { TabMUIContent } from '@module/mui-component';

type ContentProps = {
  label: string,
  width?: number,
  children: ReactNode,
}

const Content = (props: ContentProps) => {
  const {label, width, children} = props;
  return (
    <div className={styles.content} style={{ width: width }}>
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

  const {tabIdx, handleSelect} = useTab();
  const {showModal, handleOpen,handleClose} = useModal();
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
            <TabMUIContent index={tabIdx} value={tabIdx} />
          </Tab>
        </Content>
      </div>

      <div className={styles.item}>
        <Content label="modal">
          <Button label='show modal' handleClick={handleOpen}/>
          { showModal && (
            <Modal title='sample' handleCloseModal={handleClose}>
              <p>aaa</p>
            </Modal>
          )}
        </Content>
      </div>

      <div className={styles.item}>
        <Content label="notification">
          <NotificationField type='error' message='error message' title='error'/>
        </Content>
        <Content label="notification">
          <NotificationField type='error' message='error message'/>
        </Content>
        <Content label="notification">
          <NotificationField type='success' message='success message' title='success'/>
        </Content>
        <Content label="notification">
          <NotificationField type='success' message='success message'/>
        </Content>
      </div>

      <div className={styles.item}>
        <Content label="page header" width={500}>
          <PageHeader title='test' backLink/>
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
