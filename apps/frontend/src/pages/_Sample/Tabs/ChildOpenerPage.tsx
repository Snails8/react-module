import React, { useState, useEffect } from 'react';
import { Layout } from '../../../components/template/_Layout/Layout';

export const ChildTabPage: React.FC = () => {
  const [message, setMessage] = useState(
    JSON.parse(localStorage.getItem('key') as string)
  );

  useEffect(() => {
    window.addEventListener('storage', storageChange);
  });

  const storageChange = (e: any) => {
    setMessage(JSON.parse(localStorage.getItem('key') as string));
  };

  return (
    <>
      <Layout isContainerDesign={true}>
        <h3>子タブ</h3>
        <div>
          <p>受け取ったメッセージ：「{message}」</p>
        </div>
        <button onClick={() => window.open('page3')}>別タブで開く</button>
      </Layout>
    </>
  );
};
