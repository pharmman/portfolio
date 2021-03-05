import React from 'react'
import styles from './Projects.module.scss'
import {Project} from './project/Project';
import socialNetworkImage from '../assets/images/socialNetworkImage.png'
import todolistImage from '../assets/images/todolistImage.png'
import {ShadowTitle} from '../common/components/ShadowTitle/ShadowTitle';
import Fade from 'react-reveal/Fade';


export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialNetworkImage}`
    }

    const todolist = {
        backgroundImage: `url(${todolistImage}`

    }
    return (
        <div id='projects' className={styles.projectsBlock}>
            <Fade right cascade>
            <div className={styles.container}>
                <h2 className={styles.title}>My <span>projects</span> <ShadowTitle title={'Projects'}/></h2>
                <div className={styles.projects}>
                    <Project name={'Social Network'}
                             style={social}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                             'Aspernatur at blanditiis cum in qui soluta ullam. Adipisci aut c'}/>
                    <Project name={'Todolist'}
                             style={todolist}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                             ' Adipisci aliquid at delectus eligendi eum ex fuga illo,'}/>
                </div>
            </div>
            </Fade>
        </div>
    )
}