import { Layout } from "../../../components/templates/_Layout/Layout";
import store from "../../../store";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

type ReduxPageProps = {
  count: any
}
export const ReduxPage = () => {
  
  const count = useSelector((state: any) => state.count);
  return (
    <Layout isContainerDesign={true}>
      <div>
        <h2>Learn Redux</h2>
        <h3>直接アクセスだけする</h3>
        <p>Count: {store.getState().count}</p>

        {/* <p>connectでgetしたcount：{count}</p> */}

        <p>hooksを使ってstoreにアクセス count: {count}</p>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  return {count: state.count};
};
export default connect(mapStateToProps)(ReduxPage);