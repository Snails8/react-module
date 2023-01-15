import { ReactNode } from "react";
import styles from "./FormItem.module.css";

type FormItemProps = {
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
export const FormItem = (props: FormItemProps) => {
  const width = props.width ?? 150;
  return (
    <div className={styles.container} data-testid='form-item'>
      <span className={styles.label} style={{ width: width }}>{props.label}</span>
      <div className={styles.inner}>
        {props.children}
      </div>
    </div>
  );
};