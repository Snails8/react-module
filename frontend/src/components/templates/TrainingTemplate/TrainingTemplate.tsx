import { memo } from "react";
import { TrainingCalendarData } from "../../../hooks/useTraining";
import { TrainingCalendar } from "../../organisms/TrainingCalendar/TrainingCalendar";
import { Layout } from "../_Layout/Layout";

type TrainingTemplateProps = {
  trainingData: TrainingCalendarData
}

export const TrainingTemplate = memo((props: TrainingTemplateProps) => {
  const trainingData = props.trainingData;
  const doShowDetail = false;

  return (
    <Layout isContainerDesign={true}>
      <TrainingCalendar calendarData={trainingData} doShowDetail={false} />
    </Layout>
  );
});