import { memo, useState } from "react";
import { Link } from "react-router-dom";
import styles from './Sidebar.module.css';

type SidebarProps = {
  currentPath?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const currentPath = location.pathname;
  const [clickStatePage, setClickStatePage] = useState(currentPath.startsWith('/inspects'));
  const [clickSamplePage, setClickSamplePage] = useState(currentPath.startsWith('/samples'));
  
  return (
    <div className={styles.container}>
      <Link to="/training">
        <div className={ styles.sidebar_item }>
          <div className={ styles.sidebar_text} >training</div>
        </div>
      </Link>
      <Link to="/fishes">
        <div className={ styles.sidebar_item }>
          <div className={ styles.sidebar_text} >fishes</div>
        </div>
      </Link>
      <Link to="/atoms">
        <div className={ styles.sidebar_item }>
          <div className={ styles.sidebar_text} >atoms 検証</div>
        </div>
      </Link>
      <Link to="/users">
        <div className={ styles.sidebar_item }>
          <div className={ styles.sidebar_text} >ユーザー管理</div>
        </div>
      </Link>
      <Link to="/inspects">
        <div className={styles.sidebar_item} onClick={() => setClickStatePage(!clickStatePage)}>
          <div className={ styles.sidebar_item }>
            <div className={ styles.sidebar_text} >hooks検証</div>
          </div>
        </div>
      </Link>
      { clickStatePage &&
        <div>
          <Link to="/memo">
            <div className={ styles.sidebar_item }>
              <div className={ styles.sidebar_text} >memo検証</div>
            </div>
          </Link>
          <Link to="/useMemo">
            <div className={ styles.sidebar_item }>
              <div className={ styles.sidebar_text} >useMemo検証</div>
            </div>
          </Link>
          <Link to="/useCallBack">
            <div className={ styles.sidebar_item }>
              <div className={ styles.sidebar_text} >useCallBack検証</div>
            </div>
          </Link>
          <Link to="/states">
            <div className={ styles.sidebar_item }>
              <div className={ styles.sidebar_text} >状態保持検証</div>
            </div>
          </Link>
        </div>
      }
      <Link to="/samples">
        <div className={styles.sidebar_item} onClick={() => setClickStatePage(!clickSamplePage)}>
          <div className={ styles.sidebar_item }>
            <div className={ styles.sidebar_text} >実装 sample</div>
          </div>
        </div>
      </Link>
      { clickSamplePage && 
        <div>
          <Link to="/form">
            <div className={ styles.sidebar_item }>
              <div className={ styles.sidebar_text} >フォーム検証</div>
            </div>
          </Link>
          <Link to="/parent-tab">
            <div className={ styles.sidebar_item }>
              <div className={ styles.sidebar_text} >タブ間通信検証</div>
            </div>
          </Link>
          <Link to="/download-file">
            <div className={ styles.sidebar_item }>
              <div className={ styles.sidebar_text} >CSV・Excel 関連</div>
            </div>
          </Link>
        </div>
      }
    </div>
  );
});