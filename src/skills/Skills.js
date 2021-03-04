import React from 'react'
import {Skill} from './skill/Skill';
import styles from './Skills.module.scss'
import {ShadowTitle} from '../common/components/ShadowTitle/ShadowTitle';


export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.container}>
                <h2 className={styles.title}>My <span>Skills</span> <ShadowTitle title={'Skills'}/></h2>
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