import React from 'react';
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';
import Chart from './components/Chart/Chart';
import Swap from './components/Swap/Swap';
import RecentTrades from './components/RecentTrades/RecentTrades';
import Watchlist from './components/Watchlist/Watchlist';
import WalletContextProvider from './components/WalletContextProvider';
import styles from './App.module.css';


const App: React.FC = () => {
  return (
    <WalletContextProvider>
    <div className={styles.app}>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.column}>
          <Overview />
        </div>
        <div className={styles.centerColumn}>
          <Chart />
        </div>
        <div className={styles.column}>
          <div className={styles.swapWrapper}>
            <Swap />
          </div>
          <div className={styles.watchlistWrapper}>
            <Watchlist />
          </div>
        </div>
      </div>
      <RecentTrades />
    </div>
    </WalletContextProvider>
  );
};

export default App;
