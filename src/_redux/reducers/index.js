import { combineReducers } from 'redux';
import playlist from './playlist';
import favorited from './favorite';

export default combineReducers({
    favorited: favorited,
    playlist: playlist
})