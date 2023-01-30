import React from 'react';

type Props = {
  Message: string;
};

export const SamplePage3: React.FC<Props> = (props) => {
  return (
    <p>{props.Message}</p>
  );
};
