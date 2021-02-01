import React from 'react'
import styles from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import twitterIcon from '../assets/images/twitter.svg'
import linkedinIcon from '../assets/images/linkedin.svg'
import vkIcon from '../assets/images/vk.svg'
import instagramIcon from '../assets/images/instagram.svg'

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <h2 className={styles.title}>Rasskazov Aleksandr</h2>
                <ul className={styles.listContacts}>
                    <li className={styles.contacts}><a href={'#'}> <img alt={'#'} src={linkedinIcon} /></a></li>
                    <li className={styles.contacts}><a href={'#'}> <img alt={'#'} src={vkIcon} /></a></li>
                    <li className={styles.contacts}><a href={'#'}> <img alt={'#'} src={instagramIcon} /></a></li>
                    <li className={styles.contacts}><a href={'#'}> <img alt={'#'} src={twitterIcon} /></a></li>
                </ul>
                <p>&copy; 2021 Все права защищены</p>
            </div>
        </div>
    )
}