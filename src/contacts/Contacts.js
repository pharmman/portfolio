import React from 'react'
import styles from './Contacts.module.scss'
import {Form} from './Form/Form';
import {ShadowTitle} from '../common/components/ShadowTitle/ShadowTitle';


export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={styles.container}>
                <h2 className={styles.title}>GET IN <span>TOUCH</span><ShadowTitle title={'Contact'}/></h2>
                <Form/>
            </div>
        </div>
    )
}