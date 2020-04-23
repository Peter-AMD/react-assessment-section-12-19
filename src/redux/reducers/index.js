import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import members from './members';
import posts from './posts';
import isFetching from './isFetching';
import comments from './comments';

export default combineReducers({
  isFetching,
  comments,
  members,
  posts,
  form: formReducer,
});