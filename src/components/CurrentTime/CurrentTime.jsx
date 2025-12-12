import React from 'react'
import styles from './CurrentTime.module.css'
import { useState, useEffect } from 'react';

const CurrentTime = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return (() => clearInterval(interval))
    }, [])

    return (
        <div>
            <h1 className={styles.time}>{currentTime.toLocaleTimeString()}</h1>
        </div>

    )
}

export default CurrentTime;