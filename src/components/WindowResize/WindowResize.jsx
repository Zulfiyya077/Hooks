import React from 'react'
import styles from './WindowResize.module.css'
import { useState, useEffect } from 'react';

const WindowResize = () => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });


    useEffect(() => {

        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleSize);

        return () => {
            window.removeEventListener('resize', handleSize);
        }
    })

    return (
        <div className={styles.container}>
            <h2 className={styles.sizeInfo}>Width: {windowSize.width}px</h2>
            <h2 className={styles.sizeInfo}>Height: {windowSize.height}px</h2>
        </div>
    )
}

export default WindowResize