import React from 'react'

import styles from './InventoryPanel.module.css';
import ItemCellsPanel from './ItemCellsPanel/ItemCellsPanel';
import MeridianButton from './MeridianButton/MeridianButton';

const InventoryPanel = () => {
    return (
        <div className={styles['inventory-panel']}>
            <ItemCellsPanel />
            <MeridianButton />
        </div>
    );
};

export default InventoryPanel;