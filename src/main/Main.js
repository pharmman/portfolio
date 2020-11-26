import React from 'react'
import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.text}>
                    <span>Привет</span>
                    <h1>Я Александр Рассказов</h1>
                    <p>Frontend Разработчик</p>
                </div>
                    <div className={styles.photo}>
                        Photo
                    </div>
            </div>
        </div>
    );
}

export default Main;
