import {connect} from 'react-redux'
import { compose } from 'redux'
import { selectPostsFilteredDataIsLoading } from '../../redux/posts/posts.selector'
import { createStructuredSelector } from 'reselect';
import EditDeletePost from './edit-delete-post.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  loading: state => !selectPostsFilteredDataIsLoading(state)
})

const EditDeletePostContainer = compose(connect(mapStateToProps), WithSpinner)(EditDeletePost);

export default EditDeletePostContainer;