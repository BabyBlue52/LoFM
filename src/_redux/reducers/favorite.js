import actionTypes from '../actionTypes';

const favoritedReducer = (state = false, action) => {
    switch(action.type) {
        case actionTypes.IS_FAVORITED:
            return !state;
        case actionTypes.IS_NOT_FAVORITED:
            return !state;
        default:
            return state
    }
}
export default favoritedReducer;