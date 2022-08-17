import React from "react";
import { BasePage } from "../components/templates/BasePage/BasePage";

type Props = {
  Message: string 
};

export const SamplePage3:React.FC<Props> = (props) => {
  return (
    <BasePage>
      <p>{props.Message}</p>
    </BasePage>
  )  
}