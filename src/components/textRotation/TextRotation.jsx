import { useState, useEffect } from 'react';
import styles from './TextRotation.module.css';

const TextRotation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["HTML", "CSS", "JAVASCRIPT", "REACT.JS"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>{texts[currentIndex]}</h1>
    </div>
  );
};

export default TextRotation;
