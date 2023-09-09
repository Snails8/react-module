import React, { useState } from 'react';
import styles from './RadioButton.module.css';

export interface RadioButtonProps {
  id?: string;
  label?: string;
  defaultValue?: boolean; // default 値をレンダリング後表示したい場合は key を使う側で定義する ex) key={`input_${val}`}
  disabled?: boolean;
  onChangeHandler: (check: boolean) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id = '',
  label = '',
  defaultValue,
  disabled = false,
  onChangeHandler,
}) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className={`${styles.container}`}>
      <input
        className={`${styles.radio}`}
        type="radio"
        id={id}
        checked={value}
        onClick={(e: any) => {
          if (disabled === true) return;

          setValue(e.target.check);
          onChangeHandler(e.target.check);
          // onChangeHandler(true);
        }}
        data-testid='radio-button'
      />
      {label !== '' && id !== '' ? <label>{label}</label> : null}
    </div>
  );
};

export default RadioButton;