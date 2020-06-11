import produce from 'immer';

import actionTypes from '../actionTypes';

const initialState = {
  playlist:[]
}

const playlistReducer = (state = initialState, action) => {
  switch(action.type) {
    // ADD Channel to Playlist
    case actionTypes.ADD_CHANNEL:
      return [...state.playlist, action.playlist]; //adds channel name to playlist array 

    // DELETE Channel from Playlist    
    case actionTypes.DELETE_CHANNEL: {
      return {
        ...state,
        playlist: {
          ...state.playlist,
          [action.id]: [...state.playlist[action.index]].filter((x, index) => index !== action.index)
        },
      }
    }

    default:
      return state;
  }
}

export default playlistReducer;