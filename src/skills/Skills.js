import React from 'react'
import {Skill} from './skill/Skill';
import styles from './Skills.module.scss'
import {ShadowTitle} from '../common/components/ShadowTitle/ShadowTitle';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import {faJsSquare} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons/faReact';
import Fade from 'react-reveal/Fade';
import {SkillWithoutFA} from './skillwithoutFA/SkillWithoutFA';

export const Skills = () => {
    return (
        <div id='skills' className={styles.skillsBlock}>
            <Fade right cascade>
                <div className={styles.container}>
                    <h2 className={styles.title}>My <span>Skills</span> <ShadowTitle title={'Skills'}/></h2>
                    <div className={styles.skills}>
                        <Skill title={'JS'}
                               icon={faJsSquare}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. neque nulla officia,' +
                               ' quibusdam similique.'}/>
                        <Skill title={'React'}
                               icon={faReact}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                               'rem saepe ullam? Doloribus, harum.'}/>
                        <Skill title={'HTML, CSS'}
                               icon={faCode}
                               description={'Lorem ipsum dolor sit amet, consectetur ' +
                               'adipisicing elit. ut? A consequuntur illo optio.'}/>
                        <SkillWithoutFA title={'Redux'}
                               description={'Lorem ipsum dolor sit amet, consectetur ' +
                               'adipisicing elit. ut? A consequuntur illo optio.'}/>
                    </div>
                </div>
            </Fade>
        </div>

    )
}