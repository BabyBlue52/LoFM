import actionTypes from '../actionTypes';
let nextChannel = 0

export default {
    addChannel: (playlist) => ({
        type: actionTypes.ADD_CHANNEL,
        playlist
    }),
    updateFavorite: (index, channel) => ({
        type: actionTypes.UPDATE_FAVORITES,
        index,
        channel,
    }),
    deleteChannel: ({index, id}) => ({     // looks for index as field
        type: actionTypes.DELETE_CHANNEL,
        index,
        id
    })
}