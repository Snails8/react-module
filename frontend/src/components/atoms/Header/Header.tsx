import React from 'react';

import styles from './Header.module.css'

export interface HeaderProps {
    pageTitle: string
}

export const Header: React.FC<HeaderProps> = ({
    pageTitle 
}) => {

    return (
        <div className={`${styles.base}` }>
            {pageTitle}
        </div>
    )
}