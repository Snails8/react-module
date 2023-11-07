import React, { useEffect, useState } from "react";
import styles from "./Dropdown.module.css";

export type DropdownOption<T> = {
  label: string
  value: T
}

export type DropdownProps<T> = {
  options: DropdownOption<T>[]
  defaultValue: T
  width?: number
  disabled?: boolean
  onChangeHandler: (value: T) => void 
}

const Dropdown = (props: DropdownProps<any>) => {
  const {options, defaultValue, width=200, disabled=false, onChangeHandler} = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const closeUserMenu = () => setIsExpanded(false);

  useEffect(() => {
    document.addEventListener('click', closeUserMenu);
    return function cleanup() {
      document.removeEventListener('click', closeUserMenu);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (disabled === true) {
      return;
    }
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <div className={styles.select_option} style={{ width: width }} onClick={(e:  React.MouseEvent<HTMLInputElement>) => handleClick(e)}>
        <span className={styles.select_label} style={{ width: width }}>
          {options.find((option) => option.value === selectedValue)?.label || ''}
        </span>
        <div className={styles.icon}>
          <img src='./dropdown.svg' alt='Dropdown Icon' />
        </div>
      </div>
      { isExpanded && (
        <div style={{  width: width }}>
          {options.filter((option) => option.value !== selectedValue).map((option, idx) => (
            <div className={styles.option}
              key={idx}
              style={{  width: width }}
              onClick={() => {
                setIsExpanded(false);
                setSelectedValue(option.value);
                onChangeHandler(option.value);
              }}
              data-testid='dropdown-option'
            >
              <span className={ styles.option_label }>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;