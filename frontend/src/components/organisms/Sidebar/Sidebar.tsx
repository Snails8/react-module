import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { RouteControlForm, RouteFishes, RouteSampleIndex, RouteTraining, RouteUserIndex } from '../../../RouterConfig';
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
    currentPath.startsWith(RouteSampleIndex)
  );

  const activeColor = '#f7f7f7';

  return (
    <div className={styles.container}>
      <Link to={RouteTraining} className={styles.link}>
        <div
          className={styles.link_container}
          style={
            currentPath === RouteTraining ? { backgroundColor: activeColor } : {}
          }
        >
          <div className={styles.label}>training</div>
        </div>
      </Link>
      <Link to={RouteFishes} className={styles.link}>
        <div
          className={styles.link_container}
          style={
            currentPath === RouteFishes ? { backgroundColor: activeColor } : {}
          }
        >
          <div className={styles.label}>fishes</div>
        </div>
      </Link>
      <Link to={RouteUserIndex} className={styles.link}>
        <div
          className={styles.link_container}
          style={
            currentPath === RouteUserIndex ? { backgroundColor: activeColor } : {}
          }
        >
          <div className={styles.label}>ユーザー管理</div>
        </div>
      </Link>
      <Link to={RouteControlForm} className={styles.link}>
        <div
          className={styles.link_container}
          style={
            currentPath === RouteControlForm ? { backgroundColor: activeColor } : {}
          }
        >
          <div className={styles.label}>フォーム</div>
        </div>
      </Link>
      <Link to={RouteSampleIndex} className={styles.link}>
        <div
          className={styles.link_container}
          onClick={() => setClickSamplePage(!clickSamplePage)}
        >
          <div className={styles.label}>
            {clickSamplePage ? '実装 sample　∨' : '実装 sample　∧'}
          </div>
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
    </div>
  );
});
