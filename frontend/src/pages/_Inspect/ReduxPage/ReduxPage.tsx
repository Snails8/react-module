import { Layout } from "../../../components/templates/_Layout/Layout";
import store from "../../../store";

export const ReduxPage = () => {
  return (
    <Layout isContainerDesign={true}>
      <div>
        <h2>Learn Redux</h2>
        <p>Count: {store.getState().count}</p>
      </div>
    </Layout>
  );
};