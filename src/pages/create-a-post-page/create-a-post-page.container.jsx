import {connect} from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectAuthIsAuth } from '../../redux/auth/auth.selector'
import CreateAPostPage from './create-a-post-page.component'

const mapStateToProps = createStructuredSelector({
  selectAuthIsAuth:  selectAuthIsAuth 
});

const CreateAPostPageContainer = compose(connect(mapStateToProps))(CreateAPostPage);

export default CreateAPostPageContainer;