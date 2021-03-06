import React from 'react'
import styles from './Footer.module.scss'
import linkedinIcon from '../assets/images/linkedin.svg'
import vkIcon from '../assets/images/vk.svg'
import facebookIcon from '../assets/images/facebook.svg'
import telegramIcon from '../assets/images/telegram.svg'
import Fade from 'react-reveal/Fade';

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <Fade right cascade>
            <div className={styles.container}>
                <h2 className={styles.title}>Rasskazov Aleksandr</h2>
                <ul className={styles.listContacts}>
                    <li className={styles.contact}><a href={'https://www.linkedin.com/in/aleksandr-rasskazov-57b661208/'}> <img alt={'#'} src={linkedinIcon} /></a></li>
                    <li className={styles.contact}><a href={'https://vk.com/id34437088'}> <img alt={'#'} src={vkIcon} /></a></li>
                    <li className={styles.contact}><a href={'https://www.facebook.com/profile.php?id=100037371967527'}> <img alt={'#'} src={facebookIcon} /></a></li>
                    <li className={styles.contact}><a href={'https://t.me/Pharmman'}> <img alt={'#'} src={telegramIcon} /></a></li>
                </ul>
                <p>&copy; 2021 All rights reserved</p>
            </div>
            </Fade>
        </div>
    )
}