import { ReactNode, useState } from "react";
import styles from "./Tab.module.css";

type TabProps = {
  headers: string[]
  selected: number
  handleSelected: (idx: number) => void
  children: ReactNode
}

export const Tab = (props: TabProps) => {
  const {headers, selected, handleSelected, children} = props;

  return (
    <div className={styles.container}>
      <ul className={styles.tab}>
        {headers.map((label : string, idx: number) => (
          <li className={styles.tab__item}>
            <span className={styles.tab__link} onClick={() => handleSelected(idx)} style={selected === idx ? {backgroundColor: "green"}: {}}>{label}</span>
          </li>
        ))}
      </ul>
      <div className={styles.tab__body}>
        {children}
      </div>
    </div>
  );
};

/**
usage:
  const {tabIdx, handleSelect} = useTabSelect();
  return (
    <Tab headers={['test1', 'test2', 'test3', 'test4']} selected={tabIdx} handleSelected={handleSelect}>
      <SampleTabContent selected={tabIdx}/>
    </Tab>
  )
 */

type PageContentProps = {
  selected: number
}
export const SampleTabContent = (props: PageContentProps) => {
  const {selected} = props;

  switch (selected) {
    case 0:
      return <span>タブコンテンツ1を動的に切り替える</span>;
    case 1:
      return <span>タブコンテンツ2を動的に切り替える</span>;
    case 2:
      return <span>タブコンテンツ3を動的に切り替える</span>;
    default:
      return <span>test</span>;
  };
};