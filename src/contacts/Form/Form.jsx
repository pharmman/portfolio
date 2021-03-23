import React, {useState} from 'react'
import styles from './Form.module.scss'
import Fade from 'react-reveal/Fade';
import axios from 'axios';

export const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [isSent, setIsSent] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://email-server-portfolio-rasskaz.herokuapp.com/sendMessage', {
            name,
            email,
            text
        })
            .then(() => {
                setIsSent(true)
            })
    }

    return (
        isSent ?
            <Fade left>
                <h2 className={styles.feedbackAnswer}>Thank you for your interest, I will contact you soon!</h2>
            </Fade>
            :
            <Fade left cascade>
                <form>
                    <input value={name} onChange={e => setName(e.currentTarget.value)} name="name" type="text"
                           className={styles.feedbackInput} placeholder="Name"/>
                    <input value={email} onChange={e => setEmail(e.currentTarget.value)} name="email" type="text"
                           className={styles.feedbackInput} placeholder="Email"/>
                    <textarea value={text} onChange={e => setText(e.currentTarget.value)} name="text"
                              className={styles.feedbackInput} placeholder="Comment"/>
                    <input onClick={handleSubmit} type="submit" value="SEND EMAIL"/>
                </form>
            </Fade>
    )
}


