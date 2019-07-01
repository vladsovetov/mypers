import React from 'react'

import styles from './InventoryPanel.module.css';
import ItemCellsPanel from '../ItemCellsPanel/ItemCellsPanel';
import MeridianButton from '../MeridianButton/MeridianButton';
import CardCellsPanel from '../CardCellsPanel/CardCellsPanel';

const InventoryPanel = () => {
    return (
        <div className={styles['inventory-panel']}>
            <div className={styles['inventory-panel-inner']}>
                <ItemCellsPanel />
                <MeridianButton />
                <CardCellsPanel />
            </div>
        </div>
    );
};

export default InventoryPanel;