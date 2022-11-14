import React from 'react';
import { Layout } from '../../../components/templates/_Layout/Layout';
import { useTestUseEffect } from '../../../hooks/useTestUseEffect';
import { useCounter } from './useCounter.hooks';
import { useReload } from './useReload.hooks';

export const StatePage: React.FC = () => {
  // reload時のみ処理する
  const reloadText = useReload();

  const [counter] = useCounter();

  // useEffect検証
  useTestUseEffect(counter.count);

  return (
    <>
      <Layout isContainerDesign={true}>
        <h3>状態保持の検証</h3>
        <h3>ブラウザのリロードを感知してリロード時のみ状態を保持する</h3>
        <span>status:{reloadText}</span>

        <h3>遷移元のURLを取得する</h3>
        <span>{window.document.referrer}</span>

        <h3>useRefとuseStateを検証する</h3>
        <div>
          <div>カウント（useState）: {counter.count}</div>
          <button onClick={counter.incrementCount}>
            カウントアップ（useState）
          </button>

          <div>カウント（useRef）: {counter.countRef.current}</div>
          <button onClick={counter.doubleCountRef}>
            カウントアップ（useRef）
          </button>
        </div>
      </Layout>
    </>
  );
};
