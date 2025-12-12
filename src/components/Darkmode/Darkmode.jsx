import React from 'react'
import styles from './Darkmode.module.css'
import { useState, useEffect } from 'react';

const Darkmode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode) setIsDarkMode(JSON.parse(savedMode));
    }, []);



    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));

        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    console.log(document.body.classList);



    const toggle = () => {
        setIsDarkMode(prev => !prev);
    }

        return (

            <div className={styles.container}>
                <h1>Hello World</h1>
                <button onClick={toggle}>Toggle Dark Mode</button>
            </div>

        )
    }

    export default Darkmode;