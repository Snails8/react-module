import { ReactNode } from "react";
import styles from "./TwinItem.module.css";

type TwinItemProps = {
  children: ReactNode
  label: string
  // 文字数が多くても均一のデザインにするよう調整で使用
  width?: number 
}

/**
 * label: input の並びで使える UIcomponent
 * @param props 
 * @returns 
 */
export const TwinItem = (props: TwinItemProps) => {
  const width = props.width ?? 150;
  return (
    <div className={styles.container} data-testid='test'>
      <span className={styles.label} style={{ width: width }}>{props.label}</span>
      <div className={styles.inner}>
        {props.children}
      </div>
    </div>
  );
};