import {connect} from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectNotificationsUsers, selectNotificationsIsLoading } from '../../redux/notifications/notifications.selector'
import WithSpinner from '../with-spinner/with-spinner.component';
import Notifications from './notifications.component';

const mapStateToProps = createStructuredSelector({
  selectNotificationsUsers: selectNotificationsUsers,
  loading: state => !selectNotificationsIsLoading(state)
});

const NotificationsContainer = compose(connect(mapStateToProps), WithSpinner)(Notifications);

export default NotificationsContainer; 