import { useState } from "react";
import styles from "./TabPage.module.css";


export const TabPage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.container}>
      <ul className={styles.tab}>
        <li className={styles.tab__item}>
          <span className={styles.tab__link} onClick={() => setSelected(0)} style={selected === 0 ? {backgroundColor: "green"}: {}}>タブ1</span>
        </li>
        <li className={styles.tab__item}>
          <span className={styles.tab__link} onClick={() => setSelected(1)} style={selected === 1 ? {backgroundColor: "green"}: {}}>タブ2</span>
        </li>
        <li className={styles.tab__item}>
          <span className={styles.tab__link} onClick={() => setSelected(2)} style={selected === 2 ? {backgroundColor: "green"}: {}}>タブ3</span>
        </li>
      </ul>
      <div className={styles.tab__body}>
        <PageContent selected={selected} />
      </div>
    </div>
  );
};

type PageContentProps = {
  selected: number
}

const PageContent = (props: PageContentProps) => {
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