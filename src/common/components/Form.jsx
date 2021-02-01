import React from 'react'
import styles from './Form.module.scss'

export const Form = () => {
    return (
        <form>
            <input name="name" type="text" className={styles.feedbackInput} placeholder="Name"/>
            <input name="email" type="text" className={styles.feedbackInput} placeholder="Email"/>
            <textarea name="text" className={styles.feedbackInput} placeholder="Comment"></textarea>
            <input type="submit" value="SEND EMAIL"/>
        </form>
    )
}