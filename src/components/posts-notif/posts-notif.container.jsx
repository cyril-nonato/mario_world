import { compose } from 'redux'
import {connect} from 'react-redux'
import { postsRequest, postsRequestCancel } from '../../redux/posts/posts.actions'
import PostsNotif from './posts-notif.component'
import { notificationsRequest, notificationsRequestCancel } from '../../redux/notifications/notifications.actions';

const mapDispatchToProps = dispatch => ({
  onPostsRequest: () => dispatch(postsRequest()),
  onNotificationsRequest: () => dispatch(notificationsRequest()),
  onPostsRequestCancel: () => dispatch(postsRequestCancel()),
  onNotificationsRequestCancel: () => dispatch(notificationsRequestCancel())
});

const PostsNotifContainer = compose(connect(null, mapDispatchToProps))(PostsNotif);

export default PostsNotifContainer;