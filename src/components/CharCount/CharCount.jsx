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
        <div>
           
            <input type="text"
                value={inputText}
                onChange={handleChange}
            />

            <h2>Character Count</h2>
            <h3> {characterCount}</h3>

        </div>
    )
}

export default CharCount