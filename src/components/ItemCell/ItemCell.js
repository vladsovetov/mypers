import React, { useState } from 'react';

import styles from './ItemCell.module.css';
import constants from '../../constants';
import ItemSelector from '../../containers/ItemSelector/ItemSelector';

const ItemCell = (props) => {
    const type = props.type || constants.CELL_TYPE.HIDDEN;
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
        {open ? <ItemSelector onClosed={handleClose} type={type} /> : null}
    </>);
};

export default ItemCell;