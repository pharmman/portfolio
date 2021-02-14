import React from 'react'
import styles from './Main.module.scss'
import myPhoto from '../assets/images/myPhoto.jpg'
import Tilt from 'react-tilt/dist/tilt';

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h6>HI THERE !</h6>
                    <h1>I'M <span className={styles.name}>Aleksandr Rasskazov</span></h1>
                    <h2>Frontend Developer</h2>
                </div>
                <Tilt className={'Tilt'} options={{max: 25}}>
                    <div className={'Tilt-inner'}>
                        <div className={styles.photo}>
                            <img src={myPhoto} alt="Me" />
                        </div>
                    </div>
                </Tilt>

            </div>
        </div>
    );
}

export default Main;
