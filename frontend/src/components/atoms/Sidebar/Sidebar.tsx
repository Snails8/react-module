import React, { ReactNode } from "react";

import styles from './Sidebar.module.css'

export interface SidebarBgProps {
    children: ReactNode
}

export const SidebarBg: React.FC<SidebarBgProps> = ({
    children
}) => { 
    return (
        <div className={`${styles.base}`}>
            {children}
        </div>
    )
}