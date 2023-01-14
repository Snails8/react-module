import { FormProvider } from "react-hook-form";
import { SampleForm } from "../../../components/organisms/SampleForm/SampleForm";
import { Layout } from "../../../components/templates/_Layout/Layout";
import { usePostForm } from "./usePostForm.hooks";

export const ControlFormPage = () => {
  const {formMethods, handleSubmit} = usePostForm();
  return (
    <Layout isContainerDesign>
      <h2>React Hook Form × yup を使用した Form Sample</h2>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(() => handleSubmit)}>
          <SampleForm />
        </form>
      </FormProvider>
    </Layout>
  );
};