import React from 'react'

import constants from '../../constants';
import styles from './ItemCellsPanel.module.css';
import ItemCell from '../ItemCell/ItemCell';

const ItemCellsPanel = () => {
    return (
        <div className={styles['item-cells-panel']}>
            <div className={styles['cells-subpanel']}>
                <div className={styles['cells-column']}>
                    <ItemCell type={constants.CELL_TYPE.HIDDEN}/>
                    <ItemCell type={constants.CELL_TYPE.NECKLACE}/>
                    <ItemCell type={constants.CELL_TYPE.GLOVES}/>
                    <ItemCell type={constants.CELL_TYPE.LEFT_RING}/>
                </div>
                <div className={styles['cells-column']}>
                    <ItemCell type={constants.CELL_TYPE.HIDDEN}/>
                    <ItemCell type={constants.CELL_TYPE.CAPE}/>
                    <ItemCell type={constants.CELL_TYPE.BELT}/>
                    <ItemCell type={constants.CELL_TYPE.RIGHT_RING}/>
                </div>
                <div className={styles['cells-column']}>
                    <ItemCell type={constants.CELL_TYPE.FLY}/>
                    <ItemCell type={constants.CELL_TYPE.BOOK}/>
                    <ItemCell type={constants.CELL_TYPE.BAG}/>
                    <ItemCell type={constants.CELL_TYPE.FAIRY}/>
                </div>
            </div>
            <div className={styles['cells-subpanel']}>
                <div className={styles['cells-column']}>
                    <ItemCell type={constants.CELL_TYPE.HIDDEN}/>
                    <ItemCell type={constants.CELL_TYPE.HIDDEN}/>
                    <ItemCell type={constants.CELL_TYPE.HIDDEN}/>
                    <ItemCell type={constants.CELL_TYPE.STAR}/>
                </div>
                <div className={styles['cells-column']}>
                    <ItemCell type={constants.CELL_TYPE.HELMET}/>
                    <ItemCell type={constants.CELL_TYPE.ARMOR}/>
                    <ItemCell type={constants.CELL_TYPE.PANTS}/>
                    <ItemCell type={constants.CELL_TYPE.SHOES}/>
                </div>
                <div className={styles['cells-column']}>
                    <ItemCell type={constants.CELL_TYPE.HIDDEN}/>
                    <ItemCell type={constants.CELL_TYPE.TRINKET}/>
                    <ItemCell type={constants.CELL_TYPE.WEAPON}/>
                    <ItemCell type={constants.CELL_TYPE.AMMO}/>
                </div>
            </div>
        </div>
    );
};

export default ItemCellsPanel;