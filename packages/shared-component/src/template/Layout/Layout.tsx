import { ReactNode } from 'react';
import { GlobalHeader } from '../../organisms/common/GlobalHeader/GlobalHeader';
import { Sidebar } from '../../organisms/common/Sidebar/Sidebar';
import styles from './Layout.module.css';
import { Outlet } from "react-router-dom";

/**
 * Base Design
 * @param children
 * @returns
 */
export const Layout = () => {
  return (
    <>
      <GlobalHeader />
      <Sidebar />
      <div className={styles.container}>
        <div className={styles.contents_container}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
