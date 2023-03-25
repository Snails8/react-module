import { memo } from 'react';
import { TrainingCalendarData } from '../../../../../pages/Training/useTraining.hook';
import styles from './TrainingCalendar.module.css';

type TrainingCalendarProps = {
  calendarData: TrainingCalendarData;
  doShowDetail: boolean;
};

export const TrainingCalendar = memo((props: TrainingCalendarProps) => {
  const calendarData = props.calendarData;
  const doShowDetail = props.doShowDetail;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.header}></th>
          {Object.keys(calendarData.calendar).map((day) => (
            <th className={styles.header} key={day + 'header'}>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className={styles.body}>hoge</th>
          {Object.keys(calendarData.calendar).map((day) => (
            <td
              className={styles.body}
              key={day + calendarData.calendar[day].hoge}
            >
              120
            </td>
          ))}
        </tr>
        <tr>
          <th className={styles.body}>hoge</th>
          {Object.keys(calendarData.calendar).map((day) => (
            <td
              className={styles.body}
              key={day + calendarData.calendar[day].fuga}
            >
              120
            </td>
          ))}
        </tr>
        <tr>
          <th className={styles.body}>hoge</th>
          {Object.keys(calendarData.calendar).map((day) => (
            <td
              className={styles.body}
              key={day + calendarData.calendar[day].piyo}
            >
              120
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
});
