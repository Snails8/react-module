import { TrainingCalendar } from '../../../components/organisms/domain/Training/TrainingCalendar/TrainingCalendar';

export const Training = () => {
  const trainingData = require('./Training.json').training;
  const doShowDetail = false;

  return (
    <TrainingCalendar calendarData={trainingData} doShowDetail={false} />
  );
};
