import React, { ReactNode } from 'react';
import { Layout } from '../../organisms/Layout/Layout';

import styles from './BasePage.module.css'

export interface BasePageProps {
    children: ReactNode
}

export const BasePage: React.FC<BasePageProps> = ({
    children
}) => {

    return (
        <>
            <Layout
                headerTitle='sampleタイトル'
            /> 
            <div className={`${styles.base}`}>
                {children}
            </div>
        </>  
    )
}