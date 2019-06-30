import React from 'react'

import styles from './ItemCell.module.css';

const ItemCell = (props) => {
    const classes = styles['item-cell'] + ' ' + styles['item-cell-' + props.type];
    return (
        <div className={classes}>

        </div>
    );
};

export default ItemCell;