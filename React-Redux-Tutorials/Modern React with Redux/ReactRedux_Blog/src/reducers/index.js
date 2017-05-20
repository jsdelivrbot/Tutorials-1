import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
//This says import redux-form and grab the reducer property and save it into a variable formReducer
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
