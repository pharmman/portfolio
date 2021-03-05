import React from 'react'
import styles from './Main.module.scss'
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';

export const Main = () => {
    const particlesParams = {
        particles: {
            number: {
                value: 150,
                density: {
                    enable: true,
                    value_area: 800,
                }
            },
        },
    }

    return (
        <div className={styles.mainBlock}>
            <Particles
                className={styles.particles}
                params={particlesParams}
            />
            <Fade right cascade>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h6>HI THERE !</h6>
                    <h1>I'M <span className={styles.name}>Aleksandr Rasskazov</span></h1>
                    <ReactTypingEffect
                        text={["Frontend Developer"]}
                    />
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    );
}

export default Main;
