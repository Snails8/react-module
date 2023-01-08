import { TrainingCalendar } from '../../components/organisms/domain/Training/TrainingCalendar/TrainingCalendar';
import { Layout } from '../../components/templates/_Layout/Layout';

export const Training = () => {
  const trainingData = require('../../mockData/json/Training.json').training;
  const doShowDetail = false;

  return (
    <Layout isContainerDesign={true}>
      <TrainingCalendar calendarData={trainingData} doShowDetail={false} />
    </Layout>
  );
};
