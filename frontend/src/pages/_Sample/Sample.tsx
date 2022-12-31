import { Link } from 'react-router-dom';
import { Layout } from '../../components/templates/_Layout/Layout';

/**
 * 検証ページのindex
 * @returns
 */
export const Sample = () => {
  return (
    <Layout isContainerDesign={true}>
      route管理が二重になるのはめんどい。sidebar うまいこと利用したい
      <ul>
        <li>
          <Link to="/samples/upload-file">ファイルアップロード</Link>
        </li>
        <li>
          <Link to="/samples/tabs">タブのサンプル</Link>
        </li>
        <li>
          <Link to="/samples/calenders">カレンダーのサンプル</Link>
        </li>
      </ul>
    </Layout>
  );
};
