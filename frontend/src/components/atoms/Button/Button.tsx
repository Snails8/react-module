import React from "react";
import styles from "./Button.module.css"

export interface ButtonProps {
    label: string
    color: string
    width: number
    height: number
    disabled?: boolean
    handleClick: () => void; 
}

export const Button: React.FC<ButtonProps> = ({
    label,
    color,
    width,
    height,
    disabled=false,
    handleClick,
}) => {
    return (
        <button 
            className={`${styles.button}`}
            style={{ color: color, width: width, height: height }}
            onClick={handleClick}
        >{label}</button>
    )
}