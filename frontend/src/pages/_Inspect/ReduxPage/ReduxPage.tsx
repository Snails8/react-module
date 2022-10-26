import { Layout } from "../../../components/templates/_Layout/Layout";
import store from "../../../store";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

type ReduxPageProps = {
  count: any
}
export const ReduxPage = () => {
  
  const count = useSelector((state: any) => state.countReducer.count);
  const posts = useSelector((state: any) => state.postReducer.posts);

  const dispatch = useDispatch();
  const increase = () => dispatch({type: "INCREASE_COUNT"});
  const decrease = () => dispatch({type: "DECREASE_COUNT"});
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

        <h3>dispatchを使用し、reducerにactionを伝え、storeを買い替えるかいかえる： count</h3>
        <button onClick={increase}>UP</button>
        <button onClick={decrease}>DOWN</button>

        <h3>非同期なdispatch</h3>
        <PostComponent />
      </div>
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  return {count: state.count};
};
export default connect(mapStateToProps)(ReduxPage);


type Post = {
  id: number
  title: string
}
const PostComponent = () => {
  // const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.postReducer.posts);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      // setPosts(data);
      dispatch({
        type: "GET_POST_DATA",
        payload: data,
      });
    };;

    getPosts();
  },[dispatch]);

  return (
    <div>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};