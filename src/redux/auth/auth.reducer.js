import actionTypes from './auth.types';

export const INITIAL_STATE = {
  userCreds: null,
  loading: false,
  error: null,
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case actionTypes.SIGN_IN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userCreds: action.payload
      }
    case actionTypes.SIGN_IN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case actionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case actionTypes.SIGN_UP_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userCreds: action.payload
      }
    case actionTypes.SIGN_UP_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state;
  }
}

export default authReducer;