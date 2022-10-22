import { memo, useState } from "react";
import { Layout } from "../../../components/templates/_Layout/Layout";

export const MemoPage = () => {
  return (
    <Layout>
      <Parent />
    </Layout>
  );
};

type FizzProps = {
  isFizz: boolean    
}

const Fizz = (props: FizzProps) => {
  const {isFizz} = props;
  console.log(`Fizzが再描写されました, isFizz=${isFizz}`);

  return <span>{isFizz ? 'Fizz' : ''}</span>;
};

type BuzzProps = {
  isBuzz: boolean
}

const Buzz = memo<BuzzProps>((props) => {
  const {isBuzz} = props;
  console.log(`Buzzが再描写されました, isBuzz=${isBuzz}`);

  return <span>{isBuzz ? 'Buzz' : ''}</span>;
});

const Parent = () => {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;
  
  return (
    <div>
      <button onClick={() => setCount((c) => c +1 )}>+1</button>
      <p>{`現在のカウント： ${count}`}</p>

      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} />
      </p>
    </div>
  );
};