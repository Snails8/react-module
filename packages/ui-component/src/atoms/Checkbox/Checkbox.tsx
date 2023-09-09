import { memo, useState } from 'react';
import styles from './Checkbox.module.css';

type CheckboxProps = {
  id?: string;
  label?: string;
  defaultValue?: boolean; // default 値をレンダリング後表示したい場合は key を使う側で定義する ex) key={`input_${val}`}
  disabled?: boolean;
  onChangeHandler: (check: boolean) => void;
};

const CheckBox = memo((props: CheckboxProps) => {
  const {
    id = 'checkbox',
    label = '',
    defaultValue = false,
    disabled = false,
    onChangeHandler,
  } = props;
  const [value, setValue] = useState(defaultValue);

  return (
    <div className={`${styles.container}`}>
      <input
        className={`${styles.checkbox}`}
        type="checkbox"
        id={id}
        checked={value}
        value={value.toString()}
        disabled={disabled}
        onChange={(e: any) => {
          if (disabled === true) return;

          setValue(e.target.checked);
          onChangeHandler(e.target.checked);
        }}
        data-testid='checkbox'
      />
      {label !== '' && id !== '' ? <label>{label}</label> : null}
    </div>
  );
});

export default CheckBox;