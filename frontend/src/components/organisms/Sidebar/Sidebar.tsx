import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

type SidebarProps = {
  currentPath?: string;
};

export const Sidebar = memo((props: SidebarProps) => {
  const currentPath = location.pathname;
  const [clickStatePage, setClickStatePage] = useState(
    currentPath.startsWith('/inspects')
  );
  const [clickSamplePage, setClickSamplePage] = useState(
    currentPath.startsWith('/samples')
  );

  const activeColor = '#f7f7f7';

  return (
    <div className={styles.container}>
      <Link to="/training" className={styles.link}>
        <div
          className={styles.link_container}
          style={
            currentPath === '/training' ? { backgroundColor: activeColor } : {}
          }
        >
          <div className={styles.label}>training</div>
        </div>
      </Link>
      <Link to="/fishes" className={styles.link}>
        <div
          className={styles.link_container}
          style={
            currentPath === '/fishes' ? { backgroundColor: activeColor } : {}
          }
        >
          <div className={styles.label}>fishes</div>
        </div>
      </Link>
      <Link to="/users" className={styles.link}>
        <div
          className={styles.link_container}
          style={
            currentPath === '/users' ? { backgroundColor: activeColor } : {}
          }
        >
          <div className={styles.label}>ユーザー管理</div>
        </div>
      </Link>
      <Link
        to="/inspects"
        className={styles.link}
        style={
          currentPath === '/inspects' ? { backgroundColor: activeColor } : {}
        }
      >
        <div
          className={styles.link_container}
          onClick={() => setClickStatePage(!clickStatePage)}
        >
          <div className={styles.label}> hooks検証</div>
        </div>
      </Link>
      {clickStatePage && (
        <div>
          <Link to="/memo" className={styles.link}>
            <div
              className={styles.link_container}
              style={
                currentPath === '/memo' ? { backgroundColor: activeColor } : {}
              }
            >
              <div className={styles.link_container}>
                <div className={styles.label}>memo検証</div>
              </div>
            </div>
          </Link>
          <Link to="/useMemo" className={styles.link}>
            <div
              className={styles.link_container}
              style={
                currentPath === '/useMemo'
                  ? { backgroundColor: activeColor }
                  : {}
              }
            >
              <div className={styles.link_container}>
                <div className={styles.label}>useMemo検証</div>
              </div>
            </div>
          </Link>
          <Link to="/useCallBack" className={styles.link}>
            <div
              className={styles.link_container}
              style={
                currentPath === '/useCallBack'
                  ? { backgroundColor: activeColor }
                  : {}
              }
            >
              <div className={styles.link_container}>
                <div className={styles.label}>useCallBack検証</div>
              </div>
            </div>
          </Link>
          <Link to="/states" className={styles.link}>
            <div
              className={styles.link_container}
              style={
                currentPath === '/states'
                  ? { backgroundColor: activeColor }
                  : {}
              }
            >
              <div className={styles.link_container}>
                <div className={styles.label}>状態保持検証</div>
              </div>
            </div>
          </Link>
        </div>
      )}
      <Link to="/samples" className={styles.link}>
        <div
          className={styles.link_container}
          onClick={() => setClickSamplePage(!clickSamplePage)}
        >
          <div className={styles.label}>
            {clickSamplePage ? '実装 sample　∨' : '実装 sample　∧'}
          </div>
        </div>
      </Link>
      {clickSamplePage && (
        <div>
            <div
              className={styles.link_container}
              style={
                currentPath === '/form' ? { backgroundColor: activeColor } : {}
              }
            >
              <div className={styles.link_container}>
                <div className={styles.label}>Clicked</div>
              </div>
            </div>
        </div>
      )}
    </div>
  );
});
