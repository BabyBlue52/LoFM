import actionTypes from '../actionTypes';
  
let nextChannelId = 0
export default {
    addChannel: (channel) => ({
        type: actionTypes.ADD_CHANNEL,
        payload: {
            id: ++nextChannelId,
            channel 
        }
    }),
    updateFavorite: (index, favorite) => ({
        type: actionTypes.UPDATE_FAVORITES,
        index,
        favorite,
    }),
    deleteChannel: (index, channel) => ({
        type: actionTypes.DELETE_CHANNEL,
        index,
        channel,
    })
}