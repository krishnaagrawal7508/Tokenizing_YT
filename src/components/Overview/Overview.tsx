import React from 'react';
import styles from './Overview.module.css';

const Overview: React.FC = () => {
  return (
    <div className={styles.overview}>
      <h2>$harkirat1</h2>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.time}> 30m:</div>
          <div className={styles.perc}> +0.31%</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.time}> 1h:</div>
          <div className={styles.perc}> +15.62%</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.time}> 2h:</div>
          <div className={styles.perc}> +5.44%</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.time}> 4h:</div>
          <div className={styles.perc}> +6.34%</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.time}> 8h:</div>
          <div className={styles.perc}> +6.34%</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.time}> 24h:</div>
          <div className={styles.perc}> +6.34%</div>
        </div>
      </div>
      <div className={styles.details}>
        <br></br>
        <div className={styles.detail}>
          <span>Mint Address</span>
          <span>7atgf...icFv1</span>
        </div>
        <div className={styles.detail}>
          <span>Youtube Channel</span>
          <span><a href='https://www.youtube.com/@harkirat1' style={{color: 'white'}}>Youtube</a></span>
        </div>
        <div className={styles.detail}>
          <span>Public Name</span>
          <span>Harkirat Singh</span>
        </div>
        <div className={styles.detail}>
          <span>Total Tokens</span>
          <span>10,000</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
