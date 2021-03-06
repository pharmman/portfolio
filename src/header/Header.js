import React, {useEffect, useState} from 'react'
import styles from './Header.module.scss'
import Nav from "./nav/Nav";
import BurgerNav from './burgerNav/burgerNav';

export const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [defaultHeader, setDefaultHeader] = useState(true)

    const changeHeader = () => {
        if (window.pageYOffset < scrollY || window.pageYOffset === 0) {
            setDefaultHeader(true)
        } else {
            setDefaultHeader(false)
        }
        setScrollY(window.pageYOffset)
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener('scroll', changeHeader)
        }
        watchScroll()
        return () => {
            window.removeEventListener('scroll', changeHeader)
        }
    })

    return (
        <div className={defaultHeader ?  styles.header : styles.scrolledHeader}>
            <Nav/>
            <BurgerNav/>
        </div>
    );
}