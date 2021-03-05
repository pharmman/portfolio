import React, {useEffect, useState} from 'react'
import styles from './Header.module.scss'
import Nav from "../nav/Nav";

export const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [defaultHeader, setDefaultHeader] = useState(false)

    const changeHeader = () => {
        if (window.pageYOffset < scrollY) {
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
        </div>
    );
}