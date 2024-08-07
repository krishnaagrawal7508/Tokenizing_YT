import React, { useState } from 'react';
import styles from './Swap.module.css';

const Swap: React.FC = () => {
    const [activeTab, setActiveTab] = useState('buy');
    const balance = 2.12;
    const id = 4;
    const price = 0.561125;
    const fee = 0.02805625;
    const maxSpent = 0.70140625;

    return (
        <div className={styles.swapContainer}>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'buy' ? styles.activeBuy : ''}`}
                    onClick={() => setActiveTab('buy')}
                >
                    Buy
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'sell' ? styles.activeSell : ''}`}
                    onClick={() => setActiveTab('sell')}
                >
                    Sell
                </button>
            </div>
            <div className={styles.balance}>
                <span>ID: {id}</span>
                <span>Balance: {balance}</span>
            </div>
            <input className={styles.input} type="number" defaultValue={1} />
            <div className={styles.details}>
                <div className={styles.detail}>
                    <span>Price</span>
                    <span>{price} SOL</span>
                </div>
                <div className={styles.detail}>
                    <span>Fee</span>
                    <span>{fee} SOL</span>
                </div>
                <div className={styles.detail}>
                    <span>Max SOL Spent</span>
                    <span>{maxSpent} SOL</span>
                </div>
            </div>
            <button className={activeTab === 'buy' ? styles.actionButtonBuy : styles.actionButtonSell}>{activeTab === 'buy' ? 'Buy' : 'Sell'}</button>
        </div>
    );
};

export default Swap;
