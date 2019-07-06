import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import constants from '../../constants';
import styles from './CardCellsPanel.module.css';
import ItemCell from '../ItemCell/ItemCell';

const useStyles = makeStyles(theme => ({
    button: {
        minWidth: 'auto',
        marginTop: '8px'
    }
}));

const CardCellsPanel = () => {
    const classes = useStyles();
    const buttonClasses = styles['card-cell-button-add'] + ' ' + classes.button;
    return (
        <div className={styles['card-cells-panel']}>
            <div className={styles['card-cell-container']}>
                <ItemCell type={constants.CARD_TYPE.DESTROYER}/>
                <Button className={buttonClasses} variant="contained">0</Button>
            </div>
            <div className={styles['card-cell-container']}>
                <ItemCell type={constants.CARD_TYPE.BATTLE}/>
                <Button className={buttonClasses} variant="contained">0</Button>
            </div>
            <div className={styles['card-cell-container']}>
                <ItemCell type={constants.CARD_TYPE.LONGEVITY}/>
                <Button className={buttonClasses} variant="contained">0</Button>
            </div>
            <div className={styles['card-cell-container']}>
                <ItemCell type={constants.CARD_TYPE.DURABILITY}/>
                <Button className={buttonClasses} variant="contained">0</Button>
            </div>
            <div className={styles['card-cell-container']}>
                <ItemCell type={constants.CARD_TYPE.SOULPRIME}/>
                <Button className={buttonClasses} variant="contained">0</Button>
            </div>
            <div className={styles['card-cell-container']}>
                <ItemCell type={constants.CARD_TYPE.DESTROYER}/>
                <Button className={buttonClasses} variant="contained">0</Button>
            </div>
        </div>
    );
};

export default CardCellsPanel;