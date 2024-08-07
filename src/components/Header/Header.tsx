import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images.png';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Banger" className={styles.logo} />
        <h1>BANGER</h1>
      </div>
      {/* <div className={styles.menu}>
        <span>Rewards</span>
        <span>Explore</span>
        <span>Trade</span>
      </div> */}
      <WalletMultiButton></WalletMultiButton>
      {/* <button className={styles.connectWallet}>Connect Wallet</button> */}
    </header>
  );
};

export default Header;
