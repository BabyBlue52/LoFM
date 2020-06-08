import actionTypes from '../actionTypes';
let nextChannel = 0

export default {
    addChannel: (playlist, id) => ({
        type: actionTypes.ADD_CHANNEL,
        playlist,
        id: nextChannel++
    }),
    updateFavorite: (index, channel) => ({
        type: actionTypes.UPDATE_FAVORITES,
        index,
        channel,
    }),
    deleteChannel: (playlist, id) => ({     // looks for channel id as field
        type: actionTypes.DELETE_CHANNEL,
        playlist,
        id
    })
}