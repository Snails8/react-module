import { memo } from 'react';
import styles from './Input.module.css';

type InputProps = {
  type: string;
  id: string;
  defaultValue?: string | number;
  required?: boolean;
  width?: number;
  height?: number;
  padding?: number;
  onChangeHandler: (value: string) => void;
  onBlurHandler?: () => void;
  disabled?: boolean;
};

export const Input = memo((props: InputProps) => {
  const {
    type,
    id,
    defaultValue = '',
    required = false,
    width=80,
    height=10,
    padding=5,
    onChangeHandler,
    onBlurHandler = () => {},
    disabled = false,
  } = props;
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
      onBlur={() => {
        onBlurHandler();
      }}
      disabled={disabled}
      data-testid='input'
    />
  );
});
