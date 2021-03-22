import React, {useState} from 'react'
import styles from './Form.module.scss'
import Fade from 'react-reveal/Fade';
import axios from 'axios';

export const Form = () => {

     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [text, setText] = useState('')

    const handleSubmit = (e) => {
         e.preventDefault()
         axios.post('http://localhost:3010/sendMessage', {
             name,
             email,
             text
         })
             .then(() => {
                 //TODO change state for show another component
                 alert('')
             })
    }

    return (
        <Fade left cascade>
        <form>
            <input value={name} onChange={e => setName(e.currentTarget.value)} name="name" type="text" className={styles.feedbackInput} placeholder="Name"/>
            <input value={email} onChange={e => setEmail(e.currentTarget.value)} name="email" type="text" className={styles.feedbackInput} placeholder="Email"/>
            <textarea value={text} onChange={e => setText(e.currentTarget.value)} name="text" className={styles.feedbackInput} placeholder="Comment"/>
            <input onClick={handleSubmit} type="submit" value="SEND EMAIL"/>
        </form>
        </Fade>
    )
}


