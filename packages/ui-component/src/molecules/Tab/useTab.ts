import { useState } from "react";

const useTab = () => {
  const [tabIdx, selectTabIdx] = useState(0);
  const handleSelect = (idx: number) => {
    selectTabIdx(idx);
  };

  return {
    tabIdx,
    handleSelect,
  };
};

export default useTab;