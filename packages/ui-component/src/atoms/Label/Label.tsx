import { memo } from 'react';
import styles from './Label.module.css';

type LabelProps = {
  text: string;
  color: string;
  width: number;
};

const Label = memo((props: LabelProps) => {
  const { text, color, width } = props;

  return (
    <div
      data-testid='label'
      className={`${styles.label}`}
      style={{ color: color, width: width, borderColor: color }}
    >
      {text}
    </div>
  );
});

export default Label;