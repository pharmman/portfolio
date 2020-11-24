import React from 'react'
import styles from './skill.module.css'


export const Skill = () => {
    return (
        <div className={styles.skillMain}>
            <div className={styles.skillImg}>
            </div>
            <h5>React</h5>
            <div className={styles.skillDescription}><p>Подробное описание навыка</p></div>
        </div>
    )
}