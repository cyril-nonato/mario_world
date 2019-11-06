import {connect} from 'react-redux'
import { compose } from 'redux'
import { postsUserRequest } from '../../redux/posts/posts.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import UserPostsPage from './user-posts-page.component';

const mapDispatchToProps = dispatch => ({
  onPostsUserRequest: () => dispatch(postsUserRequest())
});

const UserPostsPageContainer = compose(connect(null, mapDispatchToProps), WithSpinner)(UserPostsPage);

export default UserPostsPageContainer;