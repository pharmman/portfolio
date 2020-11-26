import React from 'react'
import styles from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";


export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <h2 className={styles.title}>Рассказов Александр</h2>
                <ul className={styles.listContacts}>
                    <li className={styles.contacts}></li>
                    <li className={styles.contacts}></li>
                    <li className={styles.contacts}></li>
                    <li className={styles.contacts}></li>
                </ul>
                <p>&copy; 2020 Все права защищены</p>
            </div>
        </div>
    )
}