import React from 'react'
import styles from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Form} from "../common/components/Form";



export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <h2 className={styles.title}>GET IN <span>TOUCH</span><span className={'title-bg'}>CONTACT</span></h2>
                <Form/>
            </div>
        </div>
    )
}