import { FormProvider } from "react-hook-form";
import { Button } from "../../../components/atoms/ui/Button/Button";
import { TabMUI } from "../../../components/molecules/_MUI/Tab/Tab";
import { TabMUIContent } from "../../../components/molecules/_MUI/Tab/TabContent";
import { useSelectTab } from "../../../components/molecules/_MUI/Tab/useSelectTab";
import { SampleForm } from "../../../components/organisms/domain/SampleForm/SampleForm";
import { Layout } from "../../../components/template/_Layout/Layout";
import { SimpleForm } from "./Form/Form";
import { usePostForm } from "./usePostForm.hooks";

export const FormPage = () => {
  const {formMethods, handleSubmit} = usePostForm();
  
  const {tabIdx, handleSelected} = useSelectTab();
  const headers = ['React Hook Form × yup ', '通常のForm'];
  return (
    <>
      <TabMUI headers={headers} tabIdx={tabIdx} handleChange={handleSelected} width={400} centered>
        <TabMUIContent value={tabIdx} index={0}>
          <h2>React Hook Form × yup を使用した Form Sample</h2>
          <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(() => handleSubmit)}>
              <SampleForm />
              <Button label="送信" handleClick={handleSubmit} />
            </form>
          </FormProvider>
        </TabMUIContent>

        <TabMUIContent value={tabIdx} index={1}>
          <h2>通常の Form Sample</h2>
          <SimpleForm />
        </TabMUIContent>
      </TabMUI>
    </>
  );
};