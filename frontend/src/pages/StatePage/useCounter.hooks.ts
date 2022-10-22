import { MutableRefObject, useRef, useState } from "react";

interface Counter {
  count: number
  countRef: MutableRefObject<number>
  incrementCount: () => void
  doubleCountRef: () => void  
}

export const useCounter = (): [Counter] => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);     // ref検証

  const incrementCount = () => setCount(count + 1);
  const doubleCountRef = () =>  countRef.current++;

  return [
    {
      count,
      countRef,
      incrementCount,
      doubleCountRef,
    }
  ];
};