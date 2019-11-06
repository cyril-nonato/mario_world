import {} from 'react-redux'
import { compose } from 'redux'
import {connect} from 'react-redux'
import Posts from './posts.component'
import { postsRequest } from '../../redux/posts/posts.actions'
import { createStructuredSelector } from 'reselect'
import { selectPostsData, selectPostsDataIsLoading } from '../../redux/posts/posts.selector'
import WithSpinner from '../with-spinner/with-spinner.component'

const mapStateToProps = createStructuredSelector({
  selectPostsData: selectPostsData,
  loading: state => !selectPostsDataIsLoading(state)
})

const mapDispatchToProps = dispatch => ({
  onPostsRequest: () => dispatch(postsRequest())
})

const PostsContainer = compose(connect(mapStateToProps, mapDispatchToProps), WithSpinner)(Posts);

export default PostsContainer;