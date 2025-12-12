import React, { useState, useEffect } from 'react';
import styles from './Tab.module.css';
import axios from "axios";


const Tab = () => {
    const tabs = ["Home", "Profile", "Settings"];

    const [state, setState] = useState({
        activeTab: 'Home',
        bgColor: '#f0f4f8',
        btnColor: {
            Home: '#ff6b6b',
            Profile: '#4ecdc4',
            Settings: '#45b7d1'
        },
        apiData: null,
        photoUrl: '',
        loading: false
    });

    const randomColor = () => {
        const colors = [
            "#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", 
            "#6c5ce7", "#a29bfe", "#fd79a8", "#fdcb6e"
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const updateState = (key, value) => {
        setState(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleTabClick = (tabName) => {
        setState(prev => ({
            ...prev,
            activeTab: tabName,
            bgColor: randomColor(),
            btnColor: {
                Home: randomColor(),
                Profile: randomColor(),
                Settings: randomColor()
            }
        }));
    };

   
    useEffect(() => {
        const fetchData = async () => {
            updateState('loading', true);
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${state.activeTab.length}`
                );
                updateState('apiData', response.data);
            } catch (error) {
                console.error("Error fetching tab data:", error);
            } finally {
                updateState('loading', false);
            }
        };
        fetchData();
    }, [state.activeTab]);

    
    useEffect(() => {
        const fetchPhoto = () => {
            const randomSeed = `${state.activeTab}-${Date.now()}`;
            updateState('photoUrl', `https://api.dicebear.com/7.x/avataaars/svg?seed=${randomSeed}`);
        };
        fetchPhoto();
    }, [state.activeTab]);

    return (

        <div className={styles.container} style={{ backgroundColor: state.bgColor }}>
            <div className={styles.wrapper}>
                <div className={styles.tabContainer}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`${styles.tabButton} ${state.activeTab === tab ? styles.active : ''}`}
                            style={{ 
                                backgroundColor: state.activeTab === tab ? state.btnColor[tab] : 'transparent',
                                borderColor: state.btnColor[tab]
                            }}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className={styles.content}>
                    <div className={styles.contentContainer}>
                        <h2 className={styles.pageTitle}>{state.activeTab} Page</h2>

                        {state.loading ? (
                            <div className={styles.loader}>Loading...</div>
                        ) : state.apiData ? (
                            <div className={styles.apiContent}>
                                <h3 className={styles.contentTitle}>{state.apiData.title}</h3>
                                <p className={styles.contentBody}>{state.apiData.body}</p>
                            </div>
                        ) : (
                            <p>Loading content...</p>
                        )}
                    </div>

                    <div className={styles.imageContainer}>
                        {state.photoUrl ? (
                            <img 
                                src={state.photoUrl} 
                                alt={`${state.activeTab} Avatar`} 
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