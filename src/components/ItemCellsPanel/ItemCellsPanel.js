import React from 'react'

import constants from '../../constants';
import styles from './ItemCellsPanel.module.css';
import ItemCell from '../ItemCell/ItemCell';

const ItemCellsPanel = () => {
    return (
        <div className={styles['item-cells-panel']}>
            <div className={styles['cells-subpanel']}>
                <div className={styles['cells-column']}>
                    <ItemCell type={constants.ITEM_TYPE.HIDDEN}/>
                    <ItemCell type={constants.ITEM_TYPE.NECKLACE}/>
                    <ItemCell type={constants.ITEM_TYPE.GLOVES}/>
                    <ItemCell type={constants.ITEM_TYPE.LEFT_RING}/>
                </div>
                <div className={styles['cells-column']}>
                    <ItemCell type={constants.ITEM_TYPE.HIDDEN}/>
                    <ItemCell type={constants.ITEM_TYPE.CAPE}/>
                    <ItemCell type={constants.ITEM_TYPE.BELT}/>
                    <ItemCell type={constants.ITEM_TYPE.RIGHT_RING}/>
                </div>
                <div className={styles['cells-column']}>
                    <ItemCell type={constants.ITEM_TYPE.FLY}/>
                    <ItemCell type={constants.ITEM_TYPE.BOOK}/>
                    <ItemCell type={constants.ITEM_TYPE.BAG}/>
                    <ItemCell type={constants.ITEM_TYPE.FAIRY}/>
                </div>
            </div>
            <div className={styles['cells-subpanel']}>
                <div className={styles['cells-column']}>
                    <ItemCell type={constants.ITEM_TYPE.HIDDEN}/>
                    <ItemCell type={constants.ITEM_TYPE.HIDDEN}/>
                    <ItemCell type={constants.ITEM_TYPE.HIDDEN}/>
                    <ItemCell type={constants.ITEM_TYPE.STAR}/>
                </div>
                <div className={styles['cells-column']}>
                    <ItemCell type={constants.ITEM_TYPE.HELMET}/>
                    <ItemCell type={constants.ITEM_TYPE.ARMOR}/>
                    <ItemCell type={constants.ITEM_TYPE.PANTS}/>
                    <ItemCell type={constants.ITEM_TYPE.SHOES}/>
                </div>
                <div className={styles['cells-column']}>
                    <ItemCell type={constants.ITEM_TYPE.HIDDEN}/>
                    <ItemCell type={constants.ITEM_TYPE.TRINKET}/>
                    <ItemCell type={constants.ITEM_TYPE.WEAPON}/>
                    <ItemCell type={constants.ITEM_TYPE.AMMO}/>
                </div>
            </div>
        </div>
    );
};

export default ItemCellsPanel;