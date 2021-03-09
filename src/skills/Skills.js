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
            <Fade left cascade>
                <div className={styles.container}>
                    <h2 className={styles.title}>My <span>Skills</span> <ShadowTitle title={'Skills'}/></h2>
                    <div className={styles.skills}>
                        <Skill title={'JS'}
                               icon={faJsSquare}
                               description={'Modern Javascript. ES6 and newer. Typescript.'}/>
                        <Skill title={'React'}
                               icon={faReact}
                               description={'Development single-page application projects using' +
                               ' functional components and modern approaches.'}/>
                        <Skill title={'HTML, CSS'}
                               icon={faCode}
                               description={'Responsive Web Design,  Cross-Browser Compatibility. Development with Preprocessors.'}/>
                        <SkillWithoutFA title={'Redux'}
                                        description={'State management in React. With usage Redux Toolkit.'}/>
                    </div>
                </div>
            </Fade>
        </div>

    )
}