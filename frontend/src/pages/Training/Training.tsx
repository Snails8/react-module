import { TrainingTemplate } from "../../components/templates/TrainingTemplate/TrainingTemplate";

export const Training = () => {
  const trainingData = require( "../../hooks/Json/Training.json");
  
  return (
    <TrainingTemplate trainingData={trainingData.training}/>
  );
};