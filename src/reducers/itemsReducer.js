import constants from '../constants';

function items(state = [], action) {
    switch (action.type) {
        case constants.ACTIONS.FETCH_ITEMS_PROGRESS:
            return state;
        case constants.ACTIONS.FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                [action.data.type]: action.data.items
            };
        default:
            return state;
    }
}

export default items;