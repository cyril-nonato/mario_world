import actionTypes from "./notifications.types";

export const notificationsRequest = () => ({
  type: actionTypes.NOTIFICATIONS_REQUEST
});

export const notificationsRequestSuccess = (users) => ({
  type: actionTypes.NOTIFICATIONS_REQUEST_SUCCESS,
  payload: users
});

export const notificationsRequestFailure = (message) => ({
  type: actionTypes.NOTIFICATIONS_REQUEST_FAILURE,
  payload: message
});

export const notificationsRequestCancel = () => ({
  type: actionTypes.NOTIFICATIONS_REQUEST_CANCEL
})