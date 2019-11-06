import {createSelector} from 'reselect'

const selectNotifications = state => state.notifications;

export const selectNotificationsUsers = createSelector(
  [selectNotifications],
  notifications => notifications.users
);

export const selectNotificationsIsLoading = createSelector(
  [selectNotifications],
  notifications => !!notifications.users
)