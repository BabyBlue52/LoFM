import actionTypes from '../actionTypes';

const initialState = []

const playlistReducer = (state = initialState, action) => {
  switch(action.type) {
    // ADD Channel to Playlist
    case actionTypes.ADD_CHANNEL:
      return [...state, action.playlist]; //adds channel name to playlist array 

    // DELETE Channel from Playlist    
    case actionTypes.DELETE_CHANNEL: {
      return state.filter(({id}) => id !== action.id);
    }

    default:
      return state;
  }
}

export default playlistReducer;