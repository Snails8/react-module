import { TrainingCalendar } from '../../components/organisms/TrainingCalendar/TrainingCalendar';
import { Layout } from '../../components/templates/_Layout/Layout';

export const Training = () => {
  const trainingData = require('../../mockData/json/Training.json');
  const doShowDetail = false;

  return (
    <Layout isContainerDesign={true}>
      <TrainingCalendar calendarData={trainingData} doShowDetail={false} />
    </Layout>
  );
};