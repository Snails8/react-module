import React, { memo, useState } from "react";
import { BasePage } from "../../components/templates/BasePage/BasePage";
import { useTestUseEffect } from "../../hooks/useTestUseEffect";
import { useCounter } from "./useCounter.hooks";
import { useReload } from "./useReload.hooks";

export const StatePage:React.FC = ({

}) => {
  // reload時のみ処理する
  const reloadText = useReload();

  const [counter] = useCounter();

  // useEffect検証
  useTestUseEffect(counter.count);

  return (
    <>
      <BasePage>
        <h3>状態保持の検証</h3>
        <h3>ブラウザのリロードを感知してリロード時のみ状態を保持する</h3>
        <span>status:{reloadText}</span>
        
        <h3>遷移元のURLを取得する</h3>
        <span>{window.document.referrer}</span>

        <h3>useRefとuseStateを検証する</h3>
        <div>
          <div>カウント（useState）: {counter.count}</div>
          <button onClick={counter.incrementCount}>カウントアップ（useState）</button>
  
          <div>カウント（useRef）: {counter.countRef.current}</div>
          <button onClick={counter.doubleCountRef}>カウントアップ（useRef）</button>
        </div>

        <div>
          <p>useMemo検証</p>
          <Parent />
        </div>
      </BasePage>
    </>
  )
}

type FizzProps = {
  isFizz: boolean    
}

const Fizz = (props: FizzProps) => {
  const {isFizz} = props
  console.log(`Fizzが再描写されました, isFizz=${isFizz}`)

  return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
  isBuzz: boolean
}

const Buzz = memo<BuzzProps>((props) => {
  const {isBuzz} = props
  console.log(`Buzzが再描写されました, isBuzz=${isBuzz}`)

  return <span>{isBuzz ? 'Buzz' : ''}</span>
})

export const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0
  
  return (
    <div>
      <button onClick={() => setCount((c) => c +1 )}>+1</button>
      <p>{`現在のカウント： ${count}`}</p>

      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} />
      </p>
    </div>
  )
}