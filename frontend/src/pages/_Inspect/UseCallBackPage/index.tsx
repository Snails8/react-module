import React, { useCallback, useState } from 'react';

type ButtonProps = {
  onClick: () => void;
};

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props;

  console.log('DecrementButtonが再描写されました');

  return <button onClick={onClick}>Decrement</button>;
};

const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log('IncrementButtonが再描写されました');

  return <button onClick={onClick}>Increment</button>;
});

const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log('DoubleButtonが再描写されました');

  return <button onClick={onClick}>Double</button>;
});

export const UseCallBackPage = () => {
  const [count, setCount] = useState<number>(0);

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  // useCallback で関数をメモ化(第二引数は殻の配列なので、常につねに同じ関数を返す)
  const double = useCallback(() => {
    setCount((c) => c * 2);
  }, []);

  return (
    <>
      <p>useMemoでは値をメモ化できるが、関数を渡した際は再描写されてしまう</p>
      <p>
        useCallBackを使うことで関数をメモ化して渡すことができ、再描写されなくなる
      </p>
      <p>
        以下の例では、double(メモ化された関数)を渡しており、常に同じ関数が渡されるためクリックしてもdoubleは再描写されない
      </p>
      <ul>
        <li>初回レンダリング：decrement, increment, double 描写</li>
        <li>Decrementをクリック：decrement, increment 描写</li>
        <li>Incrementをクリック ：decrement, increment 描写</li>
        <li>doubleをクリック：decrement, increment 描写</li>
      </ul>
      <p></p>
      <p>count: {count}</p>
      <DecrementButton onClick={decrement} /> {/* コンポーネントに関数を返す */}
      <IncrementButton onClick={increment} />{' '}
      {/* メモ化コンポーネントに関数を返す */}
      <DoubleButton onClick={double} />{' '}
      {/* メモ化コンポーネントにメモ化した関数を返す */}
    </>
  );
};
