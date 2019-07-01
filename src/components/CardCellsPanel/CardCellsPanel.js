import React from 'react'

import styles from './CardCellsPanel.module.css';
import ItemCell from '../ItemCell/ItemCell';

const CardCellsPanel = () => {
    return (
        <div className={styles['card-cells-panel']}>
            <ItemCell type="destroyer"/>
            <ItemCell type="battle"/>
            <ItemCell type="longevity"/>
            <ItemCell type="durability"/>
            <ItemCell type="soulprime"/>
            <ItemCell type="lifeprime"/>
        </div>
    );
};

export default CardCellsPanel;