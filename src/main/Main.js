import React from 'react'
import styles from './Main.module.scss'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h6>HI THERE !</h6>
                    <h1>I'M <span className={styles.name}>Aleksandr Rasskazov</span></h1>
                    <p>Frontend Developer</p>
                </div>
                    <div className={styles.photo}>
                        <div className={styles.image}>

                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Main;
