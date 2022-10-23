import { memo } from "react";
import styles from "./NotificationField.module.css";

type NotificationType = 'success' | 'error';

type NotificationFieldProps = {
  type: NotificationType
  message: string
  title?: string     // error時などに使用する
  messages?: string[]
}

export const NotificationField = memo((props: NotificationFieldProps) => {
  const {type, message, title='', messages=[]} = props;

  let color, backgroundColor;
  switch (type) {
    case "success":
      backgroundColor = '#e4fae1';
      color = '#1d721f';
      break;
    case "error":
      backgroundColor = '#f2dfdf';
      color = '#b72727';
      break;
    default:
      backgroundColor = '#245fb3';
      color = '#22428d';
      break;
  }

  return (
    <div className={styles.container} style={{ backgroundColor: backgroundColor }}>
      {title && <div style={{ color : color }}>{title}</div>}
      <div className={styles.message} style={{ color: color}}>{message}</div>
    </div>
  );
});