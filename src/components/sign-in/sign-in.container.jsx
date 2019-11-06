import { compose } from "redux"
import {connect} from 'react-redux'
import { signInRequest, authPopUpClear } from "../../redux/auth/auth.actions"
import SignIn from "./sign-in.component"
import { createStructuredSelector } from "reselect";
import { selectAuthUserCreds, selectAuthFailure, selectAuthLoading, selectAuthPopUp, selectAuthSuccess } from "../../redux/auth/auth.selector";
import { withRouter } from 'react-router-dom';
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  loading: selectAuthLoading,
  selectAuthUserCreds,
  selectAuthPopUp,
  selectAuthSuccess,
  selectAuthFailure,
});

const mapDispatchToProps = dispatch => ({
  onSignInRequest: (userCreds) => dispatch(signInRequest(userCreds)),
  onAuthPopUpClear: () => dispatch(authPopUpClear()),
});

const SignInContainer = compose(connect(mapStateToProps, mapDispatchToProps), withRouter, WithSpinner)(SignIn);

export default SignInContainer;