import { compose } from "redux"
import {connect} from 'react-redux'
import { signInRequest } from "../../redux/auth/auth.actions"
import SignIn from "./sign-in.component"

const mapDispatchToProps = dispatch => ({
  onSignInRequest: (userCreds) => dispatch(signInRequest(userCreds))
})

const SignInContainer = compose(connect(null, mapDispatchToProps))(SignIn);

export default SignInContainer;