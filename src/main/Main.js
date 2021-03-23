import React from 'react'
import styles from './Main.module.scss'
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
import Fade from 'react-reveal/Fade';
import myPhoto from '../assets/images/myPhoto.png';

export const Main = () => {

    const photo = {
        backgroundImage: `url(${myPhoto}`
    }

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
        <div id='main' className={styles.mainBlock}>
            <Particles
                className={styles.particles}
                params={particlesParams}
            />
            <Fade left cascade>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h6>HI THERE !</h6>
                        <h1>I'M <span className={styles.name}>Aleksandr Rasskazov</span></h1>
                        <ReactTypingEffect
                            eraseDelay={1000}
                            text={['Frontend Developer']}
                        />
                    </div>
                    <div className={styles.photo}>
                        <Tilt className="Tilt" options={{max: 25}}>
                            <div className="Tilt-inner">
                                <div style={photo} className={styles.image}>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Main;
