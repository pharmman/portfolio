import React from 'react'
import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.text}>
                    <span>Hi there</span>
                    <h1>I am Aleksandr Rasskazov</h1>
                    <p>Frontend Developer</p>
                </div>
                    <div className={styles.photo}>
                        Photo
                    </div>
            </div>
        </div>
    );
}

export default Main;
