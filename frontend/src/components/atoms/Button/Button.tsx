import { memo } from 'react';
import styles from './Button.module.css';

type ButtonColor = 'primary' | 'tertiary';
export type ButtonProps = {
  label: string;
  colorType: ButtonColor;
  width: number;
  height: number;
  margin?: number;
  disabled?: boolean;
  handleClick: any;
};

export const Button = memo((props: ButtonProps) => {
  const {
    label,
    colorType,
    width,
    height,
    margin = 0,
    disabled = false,
    handleClick,
  } = props;

  let color, backgroundColor, borderColor;
  switch (colorType) {
    case 'tertiary':
      color = '';
      backgroundColor = '#f8f4f4';
      borderColor = '#cecece';
      break;
    case 'primary':
      color = '#fff';
      backgroundColor = '#3e81ce';
      borderColor = '#fff';
      break;
  }

  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        width: width,
        height: height,
        marginTop: margin,
        borderColor: borderColor,
      }}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
});
