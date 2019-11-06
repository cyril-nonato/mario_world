import {connect} from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectAuthIsAuth } from '../../redux/auth/auth.selector'

import SignInPage from './sign-in-page.component'

const mapStateToProps = createStructuredSelector({
  selectAuthIsAuth
});

const SignInPageContainer = compose(connect(mapStateToProps))(SignInPage);

export default SignInPageContainer;