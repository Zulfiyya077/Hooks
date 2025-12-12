import React, { useState, useEffect } from 'react';
import styles from './Tab.module.css';
import axios from "axios";


const Tab = () => {
    const tabs = ["Home", "Profile", "Settings"];

    const [activeTab, setActiveTab] = useState('Home');
    const [bgColor, setBgColor] = useState('#f0f4f8');

    const [btnColor, setBtnColor] = useState({
        Home: '#ff6b6b',
        Profile: '#4ecdc4',
        Settings: '#45b7d1'
    });

    const [apiData, setApiData] = useState(null);
    const [photoUrl, setPhotoUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const randomColor = () => {
        const colors = [
            "#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", 
            "#6c5ce7", "#a29bfe", "#fd79a8", "#fdcb6e"
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        setBgColor(randomColor());
        setBtnColor({
            Home: randomColor(),
            Profile: randomColor(),
            Settings: randomColor()
        });
    };

   
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${activeTab.length}`
                );
                setApiData(response.data);
            } catch (error) {
                console.error("Error fetching tab data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [activeTab]);

    
    useEffect(() => {
        const fetchPhoto = () => {
            const randomSeed = `${activeTab}-${Date.now()}`;
            setPhotoUrl(`https://api.dicebear.com/7.x/avataaars/svg?seed=${randomSeed}`);
        };
        fetchPhoto();
    }, [activeTab]);

    return (

        <div className={styles.container} style={{ backgroundColor: bgColor }}>
            <div className={styles.wrapper}>
                <div className={styles.tabContainer}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
                            style={{ 
                                backgroundColor: activeTab === tab ? btnColor[tab] : 'transparent',
                                borderColor: btnColor[tab]
                            }}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className={styles.content}>
                    <div className={styles.contentContainer}>
                        <h2 className={styles.pageTitle}>{activeTab} Page</h2>

                        {loading ? (
                            <div className={styles.loader}>Loading...</div>
                        ) : apiData ? (
                            <div className={styles.apiContent}>
                                <h3 className={styles.contentTitle}>{apiData.title}</h3>
                                <p className={styles.contentBody}>{apiData.body}</p>
                            </div>
                        ) : (
                            <p>Loading content...</p>
                        )}
                    </div>

                    <div className={styles.imageContainer}>
                        {photoUrl ? (
                            <img 
                                src={photoUrl} 
                                alt={`${activeTab} Avatar`} 
                                className={styles.image} 
                            />
                        ) : (
                            <div className={styles.imagePlaceholder}>Loading image...</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab;