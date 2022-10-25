import { memo } from "react";
import styles from "./Input.module.css";

type InputProps = {
  type:         string
  id:           string
  defaultValue?: string
  required?:     boolean
  width:        number
  height:       number
  padding:      number
  onChangeHandler: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {type, id, defaultValue='', required=false, width, height, padding, onChangeHandler} = props;
  return (
    <input 
      className={styles.input} 
      type={type} 
      id={id} 
      defaultValue={defaultValue}
      required={required}
      style={{ width: width, height: height, padding: padding }}
      onChange={(e: any) => {
        onChangeHandler(e.target.value);
      }}
    />
  );
});