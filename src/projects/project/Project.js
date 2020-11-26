import React from 'react'
import styles from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.projectImg}>
                <button className={styles.projectButton}>Смотреть</button>
            </div>
            <div className={styles.descriptionContainer}>
                <h3 className={styles.name}>{props.name}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    )
}