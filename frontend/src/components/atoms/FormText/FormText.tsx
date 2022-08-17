import React from "react";
import styles from "./FormText.module.css"

export interface FormTextProps {
    type:         string
    id:           string
    defaultValue: string
    required:     boolean
    width:        number
    height:       number
    padding:      number
    onChangeHandler: (value: string) => void
}

export const FormText: React.FC<FormTextProps> = ({
    type,
    id,
    defaultValue,
    required,
    width,
    height,
    padding,
    onChangeHandler,
}) => {
    return (
        <input 
            type={type} 
            id={id} 
            defaultValue={defaultValue}
            required={required}
            className={`${styles.input}`} 
            style={{ width: width, height: height, padding: padding }}
            onChange={(e: any) => {
                onChangeHandler(e.target.value)
            }}
        />
    )
}