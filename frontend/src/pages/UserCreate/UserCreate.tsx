import React from "react";
import { UserCreateForm } from "../../components/organisms/UserCreateForm/UserCreateForm";
import { BasePage } from "../../components/templates/BasePage/BasePage";

export const UserCreate:React.FC = () => {

    return (
        <>
            <BasePage>
                <UserCreateForm 
                />  
            </BasePage>
        </>
    )
}