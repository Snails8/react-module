import { Layout } from '../../../components/templates/_Layout/Layout';
import store from '../../../redux/reducers/index';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const ReduxPage = () => {
  const count = useSelector((state: any) => state.countReducer.count);
  const posts = useSelector((state: any) => state.postReducer.posts);

  const dispatch = useDispatch();
  const increase = () => dispatch({ type: 'INCREASE_COUNT' });
  const decrease = () => dispatch({ type: 'DECREASE_COUNT' });

  return (
    <div>
      <h2>Learn Redux</h2>
      <h3>storeへのアクセス</h3>
      <p>直接アクセスだけする Count: {store.getState().countReducer.count}</p>

      {/* <p>connectでgetしたcount：{count}</p> */}

      <p>hooksを使ってstoreにアクセス count: {count}</p>

      <h3>
        dispatchを使用し、reducerにactionを伝え、storeを買い替えるかいかえる：
        count
      </h3>
      <button onClick={increase}>UP</button>
      <button onClick={decrease}>DOWN</button>

      <h3>非同期なdispatch。Link経由で移動しても保持される</h3>
      <Link to="/redux/test">値を取得するページに移動する</Link>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { count: state.count };
};
export default connect(mapStateToProps)(ReduxPage);
