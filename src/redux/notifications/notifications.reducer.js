import actionTypes from "./notifications.types"

const INITIAL_STATE = {
  users: null,
  loading: false,
  error: null
}

const notificationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.NOTIFICATIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case actionTypes.NOTIFICATIONS_REQUEST_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null
      }
    case actionTypes.NOTIFICATIONS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state
  }
};

export default notificationsReducer