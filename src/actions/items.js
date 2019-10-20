import constants from '../constants';
import axios from 'axios';

export const fetchItems = (type) => {
    return (dispatch) => {
        dispatch(fetchItemsProgress());
        return axios.get(`http://localhost:3001/api/items/${type}`)
            .then(response => {
                dispatch(fetchItemsSuccess({
                    type: type,
                    items: response.data ? response.data : []
                }));
            })
            .catch(error => {
                dispatch(fetchItemsFailed([]));
            });
    };
};

export const fetchItemsProgress = () => {
    return {
        type: constants.ACTIONS.FETCH_ITEMS_PROGRESS
    };
};

export const fetchItemsSuccess = (data) => {
    return {
        type: constants.ACTIONS.FETCH_ITEMS_SUCCESS,
        data: data
    };
};

export const fetchItemsFailed = () => {
    return {
        type: constants.ACTIONS.FETCH_ITEMS_FAILED
    };
};

export const saveItem = (itemProps) => {
    console.log(itemProps)
    return (dispatch) => {
        dispatch(saveItemProgress());
        return axios.post(`http://localhost:3001/api/items`, itemProps)
            .then(response => {
                dispatch(saveItemSuccess({
                    type: itemProps.type,
                    items: response.data ? response.data : []
                }));
            })
            .catch(error => {
                dispatch(saveItemFailed([]));
            });
    };
};

export const saveItemProgress = () => {
    return {
        type: constants.ACTIONS.SAVE_ITEM_PROGRESS
    };
};

export const saveItemSuccess = (data) => {
    return {
        type: constants.ACTIONS.SAVE_ITEM_SUCCESS,
        data: data
    };
};

export const saveItemFailed = () => {
    return {
        type: constants.ACTIONS.SAVE_ITEM_FAILED
    };
};