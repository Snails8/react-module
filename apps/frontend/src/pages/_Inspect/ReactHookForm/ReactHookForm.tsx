import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { FormSample1 } from "./components/FormSample";


export const ReactHookFormPage = () => {
  return (
    <div>
      <p>基本的な使い方: useForm とonSubmitをformに渡して振る舞いはmodeが決める</p>
      <p>MUI等のライブラリと連携させる場合や、特殊な入出力を扱う場合、フォームの状態に基づく動的な挙動を持つコンポーネントを扱う場合、ユニークチェックのような非同期バリデーションを行う場合、controlを使用する</p>
      <FormSample1 />


    </div>
  );
};

