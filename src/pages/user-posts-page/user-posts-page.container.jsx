import {connect} from 'react-redux'
import { compose } from 'redux'
import { postsUserRequest } from '../../redux/posts/posts.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import UserPostsPage from './user-posts-page.component';
import { createStructuredSelector } from 'reselect';
import { selectAuthIsAuth } from '../../redux/auth/auth.selector'

const mapStateToProps = createStructuredSelector({
  selectAuthIsAuth
})

const mapDispatchToProps = dispatch => ({
  onPostsUserRequest: () => dispatch(postsUserRequest())
});

const UserPostsPageContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithSpinner)(UserPostsPage);

export default UserPostsPageContainer;