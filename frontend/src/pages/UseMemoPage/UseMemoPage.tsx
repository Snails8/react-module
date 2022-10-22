import React, { useMemo, useState } from "react";
import { Layout } from "../../components/templates/_Layout/Layout";

export const UseMemoPage = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    setItems((prevItems) => {
      return [...prevItems, text]; // 現在の入力値をitemsに格納(一回目: [111], 二回目 [111, 2222]...)
    });
    setText('');
  };

  console.log(items);

  // 再描写のたびに関数を実行する(ex) [111, 2222] => 111322224 )
  const numberOfCharacter1 = items.reduce((sub, item) => sub + item + item.length, '');

  // itemsが新しくなった時のみ関数を実行する
  const numberOfCharacter2 = useMemo(() => {
    console.log('render: numberOfCharacter2');
    return items.reduce((sub, item) => sub + item + item.length, '');
  },[items]);

  return (
    <>
      <Layout>
        <p>UseMemoSample</p>
        <div>
          <input value={text} onChange={onChangeInput} />
          <button onClick={onClickButton}>add</button>
        </div>
        <div>
          {items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div>
          <p>Total Number of Characters 1: {numberOfCharacter1}</p>
          <p>Total Number of Characters 2: {numberOfCharacter2}</p>
        </div>
      </Layout>
    </>
  );
};