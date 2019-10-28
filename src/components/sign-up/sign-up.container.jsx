import { compose } from "redux"
import {connect} from 'react-redux'
import { signUpRequest } from "../../redux/auth/auth.actions"
import SignUp from "./sign-up.component";

const mapDispatchToProps = dispatch => ({
  onSignUpRequest: (userCreds) => dispatch(signUpRequest(userCreds))
})

const SignUpContainer = compose(connect(null, mapDispatchToProps))(SignUp);

export default SignUpContainer;