import { useState } from "react";

export const useTabSelect = () => {
  const [tabIdx, selectTabIdx] = useState(0);
  const handleSelect = (idx: number) => {
    selectTabIdx(idx);
  };

  return {
    tabIdx,
    handleSelect,
  };
};