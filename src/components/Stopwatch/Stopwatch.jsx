import React from 'react'
import styles from './Stopwatch.module.css'
import { useState, useEffect } from 'react';

const Stopwatch = () => {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);


    useEffect(() => {
        if (!running)
            return;

        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);


        return () => clearInterval(interval);
    }, [running]);



const handlestart = () => {
    setRunning(true);
    setTime(prevTime => prevTime + 1);
}

const handlestop = () => {
    setRunning(false);
}

const handlereset = () => {
    setRunning(false);
    setTime(0);
}



return (
    <div className={styles.container}>
        <h1 className={styles.text}>{time} sec</h1>
        <div className={styles.buttonGroup}>
            <button className={styles.btn} onClick={handlestart}>Start</button>
            <button className={styles.btn} onClick={handlestop}>Stop</button>
            <button className={styles.btn} onClick={handlereset}>Reset</button>
        </div>
    </div>
)
}

export default Stopwatch