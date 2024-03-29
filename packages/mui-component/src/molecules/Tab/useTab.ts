import { useCallback, useState } from "react";

/**
 * tabで使用するhooks
 * simpleな利用の場合、こいつから呼び出しても良い
 * @returns 
 */
const useTab = () => {
  const [tabIdx, setTabIdx] = useState(0);
  const handleSelected = useCallback((event: React.SyntheticEvent, val: number) => {
    setTabIdx(val);
  },[tabIdx]);

  return {
    tabIdx,
    handleSelected,
  };
};

export default useTab;