import React from "react";
import styles from './Dropdown.module.css';

export type DropdownOption<T> = {
    label: string
    value: T
}

export interface DropdownProps<T> {
    options: DropdownOption<T>[]
};

export const Dropdown = ({

}) => {

    return (
        <div className={`${styles.container}`}>
            <div>
                <span>{}</span>
            </div>
        </div>
    )
}