import React from 'react';
import styles from './FocusInput.module.css';
import { useRef, useEffect } from 'react';


const FocusInput = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        console.log(inputRef);
    }, [])




    return (
        <div className={styles.container}>
            <input
                type="text"
                ref={inputRef}
                className={styles.input}
                placeholder="Focus on me automatically"
            />

            <p className={styles.info}>Check the console to see the input element reference.</p>

        </div>
    )
}

export default FocusInput