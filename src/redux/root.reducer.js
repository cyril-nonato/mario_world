import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import postsReducer from './posts/posts.reducer';
import notificationsReducer from './notifications/notifications.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  notifications: notificationsReducer
});

export default rootReducer;