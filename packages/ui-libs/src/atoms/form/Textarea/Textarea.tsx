import { memo } from 'react';
import styles from './Textarea.module.css';

type TextareaProps = {
  id: string
  onChangeHandler: (value: string) => void;
  rows?: number
  cols?: number
  defaultValue?: string
  placeholder?: string
  required?: boolean
  maxLength?: number
  width?: number | string
  height?: number | string
  padding?: number
  fontWeight?: string | number
  onBlurHandler?: () => void;
  disabled?: boolean;
};

export const Textarea = memo((props: TextareaProps) => {
  const {
    id, rows=2, cols=20, defaultValue = '', placeholder='', required = false, maxLength=300, 
    width='auto', height='auto', padding='auto', fontWeight = 'normal',
    onChangeHandler, onBlurHandler = () => {}, disabled = false,
  } = props;

  return (
    <textarea
      className={styles.input}
      id={id}
      rows={rows}
      cols={cols}
      defaultValue={defaultValue}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength}
      spellCheck
      style={{
        minWidth: width,
        minHeight: height,
        padding: padding,
        fontWeight: fontWeight,
      }}
      onChange={(e: any) => {
        onChangeHandler(e.target.value);
      }}
      onBlur={() => {
        onBlurHandler();
      }}
      disabled={disabled}
      data-testid='textarea'
    />
  );
});
