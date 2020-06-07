import actionTypes from '../actionTypes';

const initialState = {
  favorites: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_CHANNEL: {
      const playlist = [...state.playlist];
      playlist.push(action.favorites);
      return {
        playlist,
      }
    }

    case actionTypes.UPDATE_FAVORITES: {
      const { index, favorite } = action;
      const playlist = [...state.playlist];
      playlist[index] = favorite;
      return {
        playlist,
      }
    }
    
    case actionTypes.DELETE_CHANNEL: {
      const { index } = action;
      const playlist = [];
      state.playlist.forEach((favorite, i) => {
        if(index !== i) {
          playlist.push(favorite)
        }
      })      
      return {
        playlist,
      }
    }
    default:
      return state;
  }
}
