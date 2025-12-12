import React from 'react'
import styles from './Bg-color.module.css'
import { useState, useEffect } from 'react';

const Bgcolor = () => {


    const [bgColor, setBgColor] = useState('white');

    useEffect(() => {
        const colors = ["red", "blue", "green", "orange", "purple"];

        const interval = setInterval(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            setBgColor(randomColor);
        }, 1500);
        return () => clearInterval(interval);

    }, [])


    return (
        <div className={styles.container} style={{ backgroundColor: bgColor }}>
            Bg-color
        </div>
    )
}

export default Bgcolor