import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { ReactHookFormBase } from "./components/FormSample";
import { FormSample2 } from "./components/FormSample2";
import { ReactHookFormDefaultValues } from "./components/FormSampleDefaultValues";
import { ReactHookFormDefaultValuesAsync } from "./components/FormSampleDefaultValuesAsync";
import { ReactHookFormDefaultValuesAsync2 } from "./components/FormSampleDefaultValuesAsync2";
import { ReactHookFormDefaultValuesAsync3 } from "./components/FormSampleDefaultValuesAsync3";


export const ReactHookFormPage = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: "100vh", }}>
      <h3>React Hook Form</h3>
      <ul>
        <li>useForm とonSubmitをformに渡して振る舞いはmodeが決める</li>
        <li>registerでinputを登録する</li>
        <li>errorsを表示する</li>
        <li>watchで値を取得する</li>
        <li>useFormの引数にresolverを渡すことでvalidationを行う</li>
        <li>MUI等のライブラリと連携させる場合や、特殊な入出力を扱う場合、フォームの状態に基づく動的な挙動を持つコンポーネントを扱う場合、ユニークチェックのような非同期バリデーションを行う場合、controlを使用する</li>
      </ul>

      <div style={{ flex: "0 0 50%" }}>
      <h3 style={{ paddingTop: 20, borderTop: "black 1 " }}> 基本的な使い方</h3>
      <ReactHookFormBase />
      </div>


      

      <div style={{ flex: "0 0 50%" }}>
        <h3 style={{ paddingTop: 20, borderTop: "black 1 " }}> FormProviderを使った方法</h3>
        <p>useContextを使用しているのでどこからでも値を取り出せるのが利点</p>
        <FormSample2 />
      </div>


      <div style={{ flex: "0 0 30%" }}>
        <h3 style={{ paddingTop: 20, borderTop: "black 1 " }}>defaultValueの設定:同期的な値</h3>
        <p>defaultValueを設定すると、初期値が設定される</p>
        <ReactHookFormDefaultValues />
      </div>


      <div style={{ flex: "0 0 30%" }}>
      <h3 style={{ paddingTop: 20, borderTop: "black 1 " }}>defaultValuesの設定:非同期的な値 - setValueを使う場合- </h3>
      <ReactHookFormDefaultValuesAsync />
      </div>


      <div style={{ flex: "0 0 30%" }}>
      <h3 style={{ paddingTop: 20, borderTop: "black 1 " }}>defaultValuesの設定:非同期な値 - resetを使う場合- </h3>
      <p>resetを使う場合</p>
      <ReactHookFormDefaultValuesAsync2 />
      </div>

      <div style={{ flex: "0 0 30%" }}>
      <h3 style={{ paddingTop: 20, borderTop: "black 1 " }}>動的フォームにおけるdefaultValuesの設定:非同期な値 - resetを使う場合- </h3>
      <p>resetを使う場合</p>
      <ReactHookFormDefaultValuesAsync3 />
      </div>



    </div>
  );
};

