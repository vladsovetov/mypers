import React from 'react'

// import
import styles from './InventoryCellsPanel.module.css';
import ItemCell from '../ItemCell/ItemCell';

const InventoryCellsPanel = () => {
    const cellsRows = 4;
    const rows = [];
    let cells = [];
    for (let rowInd = 0; rowInd < cellsRows; rowInd++) {
        cells = [];
        for (let cellInd = 0; cellInd < 6; cellInd++) {
            cells.push(
                <ItemCell key={rowInd + ' ' + cellInd}
                    type="invent"
                />
            );
        }
        rows.push(
            <div className={styles['cells-row']}
                key={rowInd}>
                {cells}
            </div>
        );
    }
    return (
        <div className={styles['inventory-cells-panel']}>
            {rows}
        </div>
    );
};

export default InventoryCellsPanel;