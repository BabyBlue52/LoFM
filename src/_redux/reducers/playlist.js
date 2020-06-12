import produce from 'immer';

import actionTypes from '../actionTypes';

const initialState = []


const playlistReducer = (state = initialState, action) => {
  switch(action.type) {
    // ADD Channel to Playlist
    case actionTypes.ADD_CHANNEL:
      return [...state, action.playlist] 

    // DELETE Channel from Playlist    
    case actionTypes.DELETE_CHANNEL:
      return {
        ...state, 
        playlist: {
          ...state.playlist,
          [action.index]: [...state.playlist[action.id]]
        }
      }

    default:
      return state;
  }
}

export default playlistReducer;