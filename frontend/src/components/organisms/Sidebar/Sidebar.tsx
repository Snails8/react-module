import React from "react";
import { Link } from "react-router-dom";
import { SidebarBg } from "../../atoms/Sidebar/Sidebar";

import styles from './Sidebar.module.css'

export const Sidebar: React.FC = ({

}) => { 
    return (
        <SidebarBg>
            <Link to="/training">
                <div className={ `${styles.sidebar_item}` }>
                    <div className={ `${styles.sidebar_text}`} >training</div>
                </div>
            </Link>
            <Link to="/fishes">
                <div className={ `${styles.sidebar_item}` }>
                    <div className={ `${styles.sidebar_text}`} >fishes</div>
                </div>
            </Link>
            <Link to="/page2">
                <div className={ `${styles.sidebar_item}` }>
                    <div className={ `${styles.sidebar_text}`} >page2</div>
                </div>
            </Link>
            <Link to="/page3">
                <div className={ `${styles.sidebar_item}` }>
                    <div className={ `${styles.sidebar_text}`} >page3</div>
                </div>
            </Link>
            <Link to="/page4">
                <div className={ `${styles.sidebar_item}` }>
                    <div className={ `${styles.sidebar_text}`} >page4</div>
                </div>
            </Link>
            <Link to="/form">
                <div className={ `${styles.sidebar_item}` }>
                    <div className={ `${styles.sidebar_text}`} >フォーム検証</div>
                </div>
            </Link>
            <Link to="/states">
                <div className={ `${styles.sidebar_item}` }>
                    <div className={ `${styles.sidebar_text}`} >状態保持検証</div>
                </div>
            </Link>
            <Link to="/parent-tab">
                <div className={ `${styles.sidebar_item}` }>
                    <div className={ `${styles.sidebar_text}`} >タブ間通信検証</div>
                </div>
            </Link>
            <Link to="/users">
                <div className={ `${styles.sidebar_item}` }>
                    <div className={ `${styles.sidebar_text}`} >ユーザー管理</div>
                </div>
            </Link>
        </SidebarBg>
    )
}