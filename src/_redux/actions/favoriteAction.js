import actionTypes from '../actionTypes';

export default {
    addFavorite: () => ({
        type: actionTypes.IS_FAVORITED,
    }),
    deleteFavorite: () => ({
        type: actionTypes.IS_NOT_FAVORITED,
    })
} 