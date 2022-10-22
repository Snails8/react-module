import React from "react";
import { UserCreateForm } from "../../components/organisms/UserCreateForm/UserCreateForm";
import { Layout } from "../../components/templates/_Layout/Layout";

export const UserCreate:React.FC = () => {

    return (
        <>
            <Layout>
                <UserCreateForm 
                />  
            </Layout>
        </>
    );
};