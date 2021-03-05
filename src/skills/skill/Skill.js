import React from 'react'
import styles from './Skill.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export const Skill = (props) => {
    return (
            <div className={styles.skill}>
                <div className={styles.icon}>
                    <FontAwesomeIcon size={'2x'} icon={props.icon}/>
                </div>
                <h3>{props.title}</h3>
                <span className={styles.skillDescription}>
                    {props.description}
                </span>
            </div>
    )
}