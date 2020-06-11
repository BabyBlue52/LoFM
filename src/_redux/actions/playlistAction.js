import actionTypes from '../actionTypes';
let nextChannel = 0

export default {
    addChannel: ({playlist, id}) => ({
        type: actionTypes.ADD_CHANNEL,
        playlist,
        id,
    }),
    updateFavorite: (index, channel) => ({
        type: actionTypes.UPDATE_FAVORITES,
        index,
        channel,
    }),
    deleteChannel: (playlist, index, id) => ({     // looks for index as field
        type: actionTypes.DELETE_CHANNEL,
        playlist,
        index,
        id
    })
}