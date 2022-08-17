import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormText } from "../../atoms/FormText/FormText";

import styles from "./UserCreateForm.module.css"

export const UserCreateForm:React.FC = () => {
    const navigate = useNavigate()

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    
    async function handleSubmit(e: any) {
        e.preventDefault();
        const fromData = {
            name: name,
            email: email,
        }

        fetch("http://localhost:7001/api/v1/users/create",{
            method: "POST",
            body: JSON.stringify(fromData)
        }).then((res) => {
            if(!res.ok) {
                console.log('error!');
            } 
            console.log('ok!');

            return navigate("/users", {
                state: {
                    isSave: true
                },
                replace: false,
            });
        }).then((data)  => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={`${styles.form_container}`}>
                <div className={`${styles.form_item}`}>
                    <div className={`${styles.container_inner}`}>
                        <span className={`${styles.form_label}`}>名前</span>
                            <FormText
                                type="text"
                                id="name"
                                defaultValue={name}
                                required={true}
                                width={400}
                                height={30}
                                padding={10}
                                onChangeHandler={(value: string) => {
                                    setName(value)
                                }}
                            />
                    </div>
                </div>
                <div className={`${styles.form_item}`}>
                    <div className={`${styles.container_inner}`}>
                        <span className={`${styles.form_label}`}>メール</span>
                            <FormText
                                type="email"
                                id="email"
                                defaultValue={email}
                                required={true}
                                width={400}
                                height={30}
                                padding={10}
                                onChangeHandler={(value: string) => {
                                    setEmail(value)
                                }}
                            />
                    </div>
                </div>
            </div>

            <div>
                <button type="submit" className="btn btn-success">保存</button>
            </div>
        </form>
    )
}