import React, {useState} from 'react'
import styles from './burgerNav.module.scss'
import {Link} from 'react-scroll'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';


const BurgerNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const onClickHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.burgerNav}>
            <div className={isOpen? `${styles.burgerNavItems} ${styles.show}` : styles.burgerNavItems}>
                <Link activeClass={styles.active} smooth={true} spy={true} duration={500} to='main'>Main</Link>
                <Link activeClass={styles.active} smooth={true} spy={true} duration={500} offset={50} to='skills'>Skills</Link>
                <Link activeClass={styles.active} smooth={true} spy={true} duration={500} offset={50} to='projects'>Projects</Link>
                <Link activeClass={styles.active} smooth={true} spy={true} duration={500} offset={50} to='contacts'>Contacts</Link>
            </div>
            <div className={styles.burgerBtn} onClick={onClickHandler}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
        </div>
    );
}

export default BurgerNav;
