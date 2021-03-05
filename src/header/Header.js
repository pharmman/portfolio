import React, {useEffect, useState} from 'react'
import styles from './Header.module.scss'
import Nav from "../nav/Nav";

export const Header = () => {
    const [scrollY, setScrollY] = useState(0);

    const changeHeader = () => {
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
        <div className={scrollY < 100?  styles.header : styles.scrolledHeader}>
            <Nav/>
        </div>
    );
}