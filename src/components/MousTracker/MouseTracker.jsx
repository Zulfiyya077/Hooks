import React from 'react'
import styles from './MouseTracker.module.css'
import { useState, useEffect } from 'react';




const MouseTracker = () => {

const [mousePosition, setmousePosition] = useState({x:0, y:0});

useEffect (() => {
    const handlemouseMove = (e) => {
        setmousePosition({x: e.clientX, y: e.clientY});
    }

    window.addEventListener('mousemove', handlemouseMove);

    return () => {
        window.removeEventListener('mousemove', handlemouseMove);
    }
}, [])

  return (
    <div className={styles.container}>
        <h2 className={styles.text}>Mouse X: {mousePosition.x}px</h2>
        <h2 className={styles.text}>Mouse Y: {mousePosition.y}px</h2>
    </div>
  )
}

export default MouseTracker