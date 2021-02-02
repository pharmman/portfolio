import React from "react";
import styles from './ShadowTitle.module.scss'

export const ShadowTitle = (props) => {
    return <span className={styles.title}>{props.title}</span>
}