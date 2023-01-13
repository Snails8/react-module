import { memo } from 'react';
import styles from './Button.module.css';

type ButtonColor = 'primary' | 'tertiary';
export type ButtonProps = {
  label: string;
  colorType?: ButtonColor;
  width?: number;
  height?: number;
  margin?: number;
  fontSize?: number;
  disabled?: boolean;
  handleClick: any;
};

export const Button = memo((props: ButtonProps) => {
  const { label, colorType='primary', width=100, height=45, margin = 0, fontSize = 26, disabled = false, handleClick } = props;

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
        minWidth: width,
        minHeight: height,
        marginTop: margin,
        fontSize: fontSize,
        borderColor: borderColor,
      }}
      onClick={handleClick}
      disabled={disabled}
      data-testid='button'
    >
      {label}
    </button>
  );
});
