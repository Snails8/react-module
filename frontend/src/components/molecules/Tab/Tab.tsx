import { ReactNode } from "react";
import styles from "./Tab.module.css";

type TabProps = {
  tabHeaders: string[]
  selected: number
  handleSelected: (idx: number) => void
  children: ReactNode
}

export const Tab = (props: TabProps) => {
  const {tabHeaders, selected, handleSelected, children} = props;

  return (
    <div className={styles.container}>
      <ul className={styles.tab}>
        {tabHeaders.map((label : string, idx: number) => (
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