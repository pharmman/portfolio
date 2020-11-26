import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import styles from './Projects.module.css'
import {Project} from "./project/Project";


export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <h2 className={styles.title}>Мои проекты</h2>
                <div className={styles.projects}>
                    <Project name={'Lorem'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                             'Aspernatur at blanditiis cum in qui soluta ullam. Adipisci aut c'}/>
                    <Project name={'Lorem'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                             ' Adipisci aliquid at delectus eligendi eum ex fuga illo,'}/>
                </div>
            </div>
        </div>
    )
}