import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const SamplePage2: React.FC = () => {
  const [searchParams] = useSearchParams();

  const query1 = searchParams.get('name');
  const query2 = searchParams.get('type');

  return (
    <>
      <h3>Sample Page 2</h3>
      <p>name={query1}</p>
      <p>type={query2}</p>
      <button onClick={() => window.open('page3')}>別タブで開く</button>
    </>
  );
};
