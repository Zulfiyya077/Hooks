import React from 'react';
import styles from './CharCount.module.css';
import { useState, useEffect } from 'react';

const CharCount = () => {

    const [inputText, setInputText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);


    useEffect(() => {
        setCharacterCount(inputText.length);
    }, [inputText]);


    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div className={styles.container}>
           
            <input type="text"
                value={inputText}
                onChange={handleChange}
                className={styles.input}
            />

            <h2 className={styles.title}>Character Count</h2>
            <h3 className={styles.count}> {characterCount}</h3>

        </div>
    )
}

export default CharCount