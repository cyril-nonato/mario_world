import {connect} from 'react-redux'
import { compose } from 'redux'
import UserPosts from './user-posts.component'
import { createStructuredSelector } from 'reselect'
import { selectPostsFilteredData, selectPostsPopUp, selectPostsSuccess, selectPostsFailure } from '../../redux/posts/posts.selector'
import WithSpinner from '../with-spinner/with-spinner.component'
import { postEditRequest, postsPopUpClear, postDeleteRequest } from '../../redux/posts/posts.actions'

const mapStateToProps = createStructuredSelector({
  loading: state => !selectPostsFilteredData(state),
  selectPostsFilteredData,
  selectPostsPopUp,
  selectPostsSuccess,
  selectPostsFailure,
});

const mapDispatchToProps = dispatch => ({
  onPostEditRequest: (post) => dispatch(postEditRequest(post)),
  onPostsPopUpClear: () => dispatch(postsPopUpClear()),
  onPostsDeleteRequest: (id) => dispatch(postDeleteRequest(id))
});

const UserPostsContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithSpinner)(UserPosts);

export default UserPostsContainer;