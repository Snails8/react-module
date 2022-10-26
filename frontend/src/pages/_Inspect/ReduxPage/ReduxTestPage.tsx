import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Layout } from "../../../components/templates/_Layout/Layout";

type Post = {
  id: number
  title: string
}
export const ReduxTestPage = () => {
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
    <Layout isContainerDesign={true}>
      <Link to="/redux">戻る</Link>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </Layout>
  );
};