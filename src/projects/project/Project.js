import React from 'react'
import styles from './Project.module.scss'


export const Project = (props) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.projectImg} style={props.style}>
                <a className={styles.projectButton} href={props.githubLink}>Check on Github</a>
                <a className={styles.projectButton} href={props.projectLink}>View Project</a>
            </div>
            <div className={styles.descriptionContainer}>
                <h3 className={styles.projectName}>{props.name}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    )
}