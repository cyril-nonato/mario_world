import {connect} from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectAuthIsAuth } from '../../redux/auth/auth.selector'
import HomePage from './home-page.component'

const mapStateToProps = createStructuredSelector({
  selectAuthIsAuth:  selectAuthIsAuth 
});

const HomePageContainer = compose(connect(mapStateToProps))(HomePage);

export default HomePageContainer;