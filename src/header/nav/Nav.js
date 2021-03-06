import React from 'react'
import styles from './Nav.module.scss'
import {Link} from 'react-scroll'


const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link activeClass={styles.active} smooth={true} spy={true} to='main'>Main</Link>
            <Link activeClass={styles.active} smooth={true} spy={true} to='skills'>Skills</Link>
            <Link activeClass={styles.active} smooth={true} spy={true} to='projects'>Projects</Link>
            <Link activeClass={styles.active} smooth={true} spy={true} to='contacts'>Contacts</Link>
        </div >
    );
}

export default Nav;
