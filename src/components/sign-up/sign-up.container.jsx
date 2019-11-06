import { compose } from "redux"
import { connect } from 'react-redux'
import { signUpRequest, authPopUpClear } from "../../redux/auth/auth.actions"
import SignUp from "./sign-up.component";
import { createStructuredSelector } from "reselect";
import { selectAuthUserCreds, selectAuthLoading, selectAuthSuccess, selectAuthFailure, selectAuthPopUp } from "../../redux/auth/auth.selector";
import { withRouter } from 'react-router-dom';
import WithSpinner from "../with-spinner/with-spinner.component";

const mapDispatchToProps = dispatch => ({
  onSignUpRequest: (userCreds) => dispatch(signUpRequest(userCreds)),
  onAuthPopUpClear: () => dispatch(authPopUpClear())
});

const mapStateToProps = createStructuredSelector({
  loading: selectAuthLoading,
  selectAuthUserCreds,
  selectAuthSuccess,
  selectAuthFailure,
  selectAuthPopUp
});

const SignUpContainer = compose(connect(mapStateToProps, mapDispatchToProps), withRouter, WithSpinner)(SignUp);

export default SignUpContainer;