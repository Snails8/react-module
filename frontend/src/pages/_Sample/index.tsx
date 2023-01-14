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
          <Link to="/samples/control-form">ReactHooksのFormサンプル</Link>
        </li>
        <li>
          <Link to="/form">formサンプル</Link>
        </li>
        <li>
          <Link to="/samples/upload-file">ファイルアップロード</Link>
        </li>
        <li>
          <Link to="/samples/tabs">タブのサンプル</Link>
        </li>
        <li>
          <Link to="/samples/calenders">カレンダーのサンプル</Link>
        </li>
        <li>
          <Link to="/samples/download-fil">CSV・Excelの扱い</Link>
        </li>
        <li>
          <Link to="/parent-tab">タブ間通信検証</Link>
        </li>
      </ul>
    </Layout>
  );
};
