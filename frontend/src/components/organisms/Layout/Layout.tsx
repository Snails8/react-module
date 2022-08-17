import React from "react";
import { Header } from "../../atoms/Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

export interface LayoutProps {
    headerTitle: string
}

export const Layout: React.FC<LayoutProps> = ({
    headerTitle
}) => {
    return (
        <>
            <Header
                pageTitle={headerTitle}
            />
            <Sidebar />
        </>
    )
}