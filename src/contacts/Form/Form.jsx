import React from 'react'
import styles from './Form.module.scss'
import Fade from 'react-reveal/Fade';

export const Form = () => {
    return (
        <Fade left cascade>
        <form>
            <input name="name" type="text" className={styles.feedbackInput} placeholder="Name"/>
            <input name="email" type="text" className={styles.feedbackInput} placeholder="Email"/>
            <textarea name="text" className={styles.feedbackInput} placeholder="Comment"/>
            <input type="submit" value="SEND EMAIL"/>
        </form>
        </Fade>
    )
}