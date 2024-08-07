import React from 'react';
import styles from './RecentTrades.module.css';

const RecentTrades: React.FC = () => {
    return (
        <div className={styles.recentTrades}>
            <h2>Recent Trades</h2>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Value</th>
                        <th>Amount</th>
                        <th>By</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>3s ago</td>
                        <td>Sell</td>
                        <td>$0.08069</td>
                        <td>0.003888</td>
                        <td>4.19k</td>
                        <td>SOL</td>
                    </tr>
                    <tr>
                        <td>18s ago</td>
                        <td>Sell</td>
                        <td>$0.08069</td>
                        <td>0.003875</td>
                        <td>4.3k</td>
                        <td>SOL</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RecentTrades;
