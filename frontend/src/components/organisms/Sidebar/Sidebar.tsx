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
        <div className={ styles.link_container }>
          <div className={ styles.label} >training</div>
        </div>
      </Link>
      <Link to="/fishes">
        <div className={ styles.link_container }>
          <div className={ styles.label} >fishes</div>
        </div>
      </Link>
      <Link to="/atoms">
        <div className={ styles.link_container }>
          <div className={ styles.label} >atoms 検証</div>
        </div>
      </Link>
      <Link to="/users">
        <div className={ styles.link_container }>
          <div className={ styles.label} >ユーザー管理</div>
        </div>
      </Link>
      <Link to="/inspects">
        <div className={styles.link_container} onClick={() => setClickStatePage(!clickStatePage)}>
          <div className={ styles.label} > hooks検証</div>
        </div>
      </Link>
      { clickStatePage &&
        <div>
          <Link to="/memo">
            <div className={ styles.link_container }>
              <div className={styles.link_container}>
                <div className={ styles.label}>memo検証</div>
              </div>
            </div>
          </Link>
          <Link to="/useMemo">
            <div className={ styles.link_container }>
              <div className={styles.link_container}>
                <div className={ styles.label} >useMemo検証</div>
              </div>
            </div>
          </Link>
          <Link to="/useCallBack">
            <div className={ styles.link_container }>
              <div className={styles.link_container}>
                <div className={ styles.label} >useCallBack検証</div>
              </div>
            </div>
          </Link>
          <Link to="/states">
            <div className={ styles.link_container }>
              <div className={styles.link_container}>
                <div className={ styles.label} >状態保持検証</div>
              </div>
            </div>
          </Link>
        </div>
      }
      <Link to="/samples">
        <div className={styles.link_container} onClick={() => setClickSamplePage(!clickSamplePage)}>
          <div className={ styles.label} >{clickSamplePage ? "実装 sample　∨" : "実装 sample　∧"}</div>
        </div>
      </Link>
      { clickSamplePage && 
        <div>
          <Link to="/form">
            <div className={ styles.link_container }>
              <div className={styles.link_container}>
                <div className={ styles.label} >フォーム検証</div>
              </div>
            </div>
          </Link>
          <Link to="/parent-tab">
            <div className={ styles.link_container }>
              <div className={styles.link_container}>
                <div className={ styles.label} >タブ間通信検証</div>
              </div>
            </div>  
          </Link>
          <Link to="/download-file">
            <div className={ styles.link_container }>
              <div className={styles.link_container}>
                <div className={ styles.label} >CSV・Excel 関連</div>
              </div>
            </div>
          </Link>
        </div>
      }
    </div>
  );
});