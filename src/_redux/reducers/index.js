import { combineReducers } from 'redux';
import playlist from './playlist';
import auth from './auth';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    playlist: playlist,
    auth: auth,
    errors: errors,
    messages: messages,
})