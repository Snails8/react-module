import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>404</h1>
      <h3>お探しのページは見つかりませんでした。</h3>

      <button onClick={() => navigate("/")}>トップに戻る</button>
    </>
  );
}