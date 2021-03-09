import React from 'react'
import styles from './SkillWithoutFA.module.scss'
import redux from '../../assets/images/redux.svg'


export const SkillWithoutFA = (props) => {
    return (
            <div className={styles.skill}>
                <div className={styles.icon}>
                    <object type="image/svg+xml" data={redux} width="70" height="70">Redux logo</object>
                </div>
                <h3>{props.title}</h3>
                <span className={styles.skillDescription}>
                    {props.description}
                </span>
            </div>
    )
}