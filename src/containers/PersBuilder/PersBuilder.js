import React from 'react';

import styles from './PersBuilder.module.css';
import InventoryPanel from '../../components/InventoryPanel/InventoryPanel';

const PersBuilder = () => {
    return (
        <div className={styles['pers-builder']}>
            <InventoryPanel />
        </div>
    )
};


export default PersBuilder;