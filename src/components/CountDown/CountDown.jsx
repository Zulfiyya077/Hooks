import React from 'react'
import styles from './CountDown.module.css'
import { useState, useEffect } from 'react';




const CountDown = () => {

    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (!running)
            return;

        const interval = setInterval(() => {
            setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [running]

    );

    const handleStart = () => {
        if (inputValue > 0) {
            setCount(parseInt(inputValue));
            setRunning(true);
        }

        setInputValue('');
    }

    const handleStop = () => {
        setRunning(false);
    }


    return (
        <div className={styles.container}>

            <input type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={styles.input}
            />

            <div className={styles.buttonGroup}>
                <button className={styles.btn} onClick={handleStart}>Start</button>
                <button className={styles.btn} onClick={handleStop}>Stop</button>
            </div>
            <p className={`${styles.timer} ${count <= 5 && count > 0 && running ? styles.timerWarning : styles.timerNormal}`}>
                Time left: {count}s
            </p>

        </div>
    )
}

export default CountDown