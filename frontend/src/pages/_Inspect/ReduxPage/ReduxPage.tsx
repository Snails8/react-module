import { Layout } from "../../../components/templates/_Layout/Layout";
import store from "../../../store";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

type ReduxPageProps = {
  count: any
}
export const ReduxPage = () => {
  
  const count = useSelector((state: any) => state.countReducer.count);
  const posts = useSelector((state: any) => state.postReducer.posts);
  return (
    <Layout isContainerDesign={true}>
      <div>
        <h2>Learn Redux</h2>
        <h3>storeへのアクセス</h3>
        <p>直接アクセスだけする Count: {store.getState().countReducer.count}</p>

        {/* <p>connectでgetしたcount：{count}</p> */}

        <p>hooksを使ってstoreにアクセス count: {count}</p>
        
        <h3>storeへのアクセス(配列)</h3>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  return {count: state.count};
};
export default connect(mapStateToProps)(ReduxPage);