import {connect} from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectAuthIsAuth } from '../../redux/auth/auth.selector'
import SignUpPage from './sign-up-page.component'

const mapStateToProps = createStructuredSelector({
  selectAuthIsAuth
});

const SignUpPageContainer = compose(connect(mapStateToProps))(SignUpPage);

export default SignUpPageContainer;