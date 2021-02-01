import React from 'react'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import styles from './Skills.module.scss'


export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My <span>Skills</span> <span className={'title-bg'}>Skills</span></h2>
                <div className={styles.skills}>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. neque nulla officia,' +
                           ' quibusdam similique.'}/>
                    <Skill title={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                           'rem saepe ullam? Doloribus, harum.'}/>
                    <Skill title={'HTML'}
                           description={'Lorem ipsum dolor sit amet, consectetur ' +
                           'adipisicing elit. ut? A consequuntur illo optio.'}/>
                </div>
            </div>

        </div>
    )
}