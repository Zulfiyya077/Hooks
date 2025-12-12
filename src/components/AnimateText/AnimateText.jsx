import React from 'react';
import styles from './Animate.module.css';
import { useState, useEffect } from 'react';

const AnimateText = () => {

    const [text, setText] = useState('Animated Text');

    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(prev => !prev);
        setText(prev => prev === 'Animated Text' ? 'Changed Text' : 'Animated Text');
    }

    return (
        <div className={styles.container}>
            <button 
                onClick={() => handleClick()} 
                className={`${styles.button} ${animate ? styles.animate : ''}`}
            >
                {text}
            </button>
        </div>
    )
}

export default AnimateText