import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { FormSample1 } from "./components/FormSample";


export const ReactHookFormPage = () => {
  return (
    <div>
      <p>入力と同時にエラーが出ない</p>
      <p>Form-Controlで監視していないため。</p>
      <FormSample1 />

    </div>
  );
};

