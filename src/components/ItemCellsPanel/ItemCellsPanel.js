import React from 'react'

import styles from './ItemCellsPanel.module.css';
import ItemCell from '../ItemCell/ItemCell';

const ItemCellsPanel = () => {
    return (
        <div className={styles['item-cells-panel']}>
            <div className={styles['cells-subpanel']}>
                <div className={styles['cells-column']}>
                    <ItemCell type="hidden"/>
                    <ItemCell type="necklace"/>
                    <ItemCell type="gloves"/>
                    <ItemCell type="left-ring"/>
                </div>
                <div className={styles['cells-column']}>
                    <ItemCell type="hidden"/>
                    <ItemCell type="cape"/>
                    <ItemCell type="belt"/>
                    <ItemCell type="right-ring"/>
                </div>
                <div className={styles['cells-column']}>
                    <ItemCell type="fly"/>
                    <ItemCell type="book"/>
                    <ItemCell type="bag"/>
                    <ItemCell type="fairy"/>
                </div>
            </div>
            <div className={styles['cells-subpanel']}>
                <div className={styles['cells-column']}>
                    <ItemCell type="hidden"/>
                    <ItemCell type="hidden"/>
                    <ItemCell type="hidden"/>
                    <ItemCell type="star"/>
                </div>
                <div className={styles['cells-column']}>
                    <ItemCell type="helmet"/>
                    <ItemCell type="armor"/>
                    <ItemCell type="pants"/>
                    <ItemCell type="shoes"/>
                </div>
                <div className={styles['cells-column']}>
                    <ItemCell type="hidden"/>
                    <ItemCell type="trinket"/>
                    <ItemCell type="weapon"/>
                    <ItemCell type="ammo"/>
                </div>
            </div>
        </div>
    );
};

export default ItemCellsPanel;