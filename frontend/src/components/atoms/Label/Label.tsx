import React from 'react'
import styles from './Label.module.css'

interface LabelProps {
  text: string
  color: string
  width: number
}

export const Label: React.FC<LabelProps> = ({
  text,
  color,
  width,
}) => (

  <div 
    className={`${styles.label}`}
    style={{ color: color, width: width, borderColor: color }}
  >
    {text}
  </div>
)