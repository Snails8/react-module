import React from "react";
import { Layout } from "../../../components/templates/_Layout/Layout";

type Props = {
  Message: string 
};

export const SamplePage3:React.FC<Props> = (props) => {
  return (
    <Layout>
      <p>{props.Message}</p>
    </Layout>
  );
};