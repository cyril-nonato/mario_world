import { compose } from "redux"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectAuthUserCreds } from "../../redux/auth/auth.selector";
import Navigation from "./navigation.component";
import { signOut } from "../../redux/auth/auth.actions";

const mapStateToProps = createStructuredSelector({
  selectAuthUserCreds
});

const mapDispatchToProps = dispatch => ({
  onSignOut: () => dispatch(signOut())
})

const NavigationContainer = compose(connect(mapStateToProps, mapDispatchToProps))(Navigation);

export default NavigationContainer;