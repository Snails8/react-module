import { TrainingCalendar } from '../../components/organisms/domain/Training/TrainingCalendar/TrainingCalendar';

export const Training = () => {
  const trainingData = require('../../mockData/json/Training.json').training;
  const doShowDetail = false;

  return (
    <TrainingCalendar calendarData={trainingData} doShowDetail={false} />
  );
};
