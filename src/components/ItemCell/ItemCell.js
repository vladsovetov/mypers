import React, { useState } from 'react';

import styles from './ItemCell.module.css';
import constants from '../../constants';
import ItemSelector from '../ItemSelector/ItemSelector';

const ItemCell = (props) => {
    const type = props.type || constants.ITEM_TYPE.HIDDEN;
    const itemClasses = styles['item-cell'] + ' ' + styles['item-cell-' + type.toLowerCase()];
    const [open, setOpen] = useState(false);

    function handleItemClick() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (<>
        <div className={itemClasses}
            onClick={handleItemClick}></div>
        <ItemSelector open={open} onClosed={handleClose}/>
    </>);
};

export default ItemCell;