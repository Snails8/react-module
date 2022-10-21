import { ReactNode } from "react";
import { GlobalHeader } from "../../organisms/GlobalHeader/GlobalHeader";
import { Sidebar } from "../../organisms/Sidebar/Sidebar";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode
}

/**
 * Base Design
 * @param children 
 * @returns 
 */
export const Layout  = (children: LayoutProps) => (
  <>
    <GlobalHeader/>
    <Sidebar />
    <div className={styles.container}>
      {children.children}
    </div>
  </>
);