import { ReactNode } from 'react';
import { GlobalHeader } from '../../organisms/GlobalHeader/GlobalHeader';
import { Sidebar } from '../../organisms/Sidebar/Sidebar';
import styles from './Layout.module.css';

type LayoutProps = {
  isContainerDesign?: boolean;
  children: ReactNode;
};

/**
 * Base Design
 * @param children
 * @returns
 */
export const Layout = (children: LayoutProps) => {
  const isContainerDesign = children.isContainerDesign;

  return (
    <>
      <GlobalHeader />
      <Sidebar />
      <div className={styles.container}>
        {isContainerDesign ? (
          <div className={styles.contents_container}>{children.children}</div>
        ) : (
          <div>{children.children}</div>
        )}
      </div>
    </>
  );
};
