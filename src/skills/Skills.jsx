import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "../skill/skill";
import styles from './Skills.module.css'


export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={styleContainer.container}>
                <div className={styles.title}>
                <h2>My Skills</h2>
                </div>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>

        </div>
    )
}