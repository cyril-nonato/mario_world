import {connect} from 'react-redux'
import { compose } from 'redux'
import { postCreateRequest, postsPopUpClear } from '../../redux/posts/posts.actions'
import CreateAPost from './create-a-post.component';
import { createStructuredSelector } from 'reselect';
import { selectPostsLoading, selectPostsPopUp, selectPostsFailure, selectPostsSuccess } from '../../redux/posts/posts.selector';
import WithSpinner from '../with-spinner/with-spinner.component';


const mapStateToProps = createStructuredSelector({
  loading: selectPostsLoading,
  selectPostsPopUp: selectPostsPopUp,
  selectPostsFailure: selectPostsFailure,
  selectPostsSuccess: selectPostsSuccess
});

const mapDispatchToProps = dispatch => ({
  onPostCreateRequest: (details) => dispatch(postCreateRequest(details)),
  onPostsPopUpClear: () => dispatch(postsPopUpClear()),
});


const CreateAPostContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithSpinner)(CreateAPost);

export default CreateAPostContainer;