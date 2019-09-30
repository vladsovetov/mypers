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