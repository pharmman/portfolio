import React from 'react'
import styles from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'



export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <h2 className={styles.title}>Контакты</h2>
                <form className={styles.form} action="">
                    <input className={styles.input} type="text"/>
                    <input className={styles.input} type="text"/>
                    <textarea className={styles.textArea} cols="30" rows="10" />
                    <button className={styles.sendButton} type={"submit"}>Отправить</button>
                </form>
            </div>
        </div>
    )
}