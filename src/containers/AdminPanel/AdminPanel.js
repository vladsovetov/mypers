import React from 'react';
import { connect } from 'react-redux';

import ItemCreator from '../../components/ItemCreator/ItemCreator';
import { saveItem } from '../../actions/items';

import styles from './AdminPanel.module.css';

const AdminPanel = (props) => {
    return (
        <div className={styles['admin-panel']}>
            <ItemCreator itemSaved={props.saveItem}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        items: state.itemsReducer
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        saveItem: (itemProps) => {
            dispatch(saveItem(itemProps));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);