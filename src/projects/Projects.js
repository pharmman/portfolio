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
            <Fade left cascade>
            <div className={styles.container}>
                <h2 className={styles.title}>My <span>projects</span> <ShadowTitle title={'Projects'}/></h2>
                <div className={styles.projects}>
                    <Project name={'Social Network'}
                             style={social}
                             githubLink={'https://github.com/pharmman/Social-Network'}
                             projectLink={'https://pharmman.github.io/Social-Network/#/'}
                             description={'React application with functional and class components.Used Typescript.'}/>
                    <Project name={'Todolist'}
                             style={todolist}
                             githubLink={'https://github.com/pharmman/TodoList'}
                             projectLink={'https://pharmman.github.io/TodoList/'}
                             description={'React application with functional components. Used Hooks. Redux Toolkit, Typescript.'}/>
                </div>
            </div>
            </Fade>
        </div>
    )
}