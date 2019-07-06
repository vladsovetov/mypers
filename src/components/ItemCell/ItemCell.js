import React from 'react'


import styles from './ItemCell.module.css';
import constants from '../../constants';

const ItemCell = (props) => {
    const type = props.type || constants.ITEM_TYPE.HIDDEN;
    const classes = styles['item-cell'] + ' ' + styles['item-cell-' + type.toLowerCase()];
    return (
        <div className={classes}>

        </div>
    );
};

export default ItemCell;