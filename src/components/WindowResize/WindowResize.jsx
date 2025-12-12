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
        <>
            <h2>Width: {windowSize.width}px</h2>
            <h2>Height: {windowSize.height}px</h2>
        </>
    )
}

export default WindowResize