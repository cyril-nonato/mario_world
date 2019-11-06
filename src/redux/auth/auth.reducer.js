import actionTypes from './auth.types';

export const INITIAL_STATE = {
  userCreds: null,
  loading: false,
  failure: null,
  success: null,
  popUp: false,

}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        failure: null,
        popUp: false,
      }
    case actionTypes.SIGN_IN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        failure: null,
        success: true,
        userCreds: action.payload,
        popUp: true
      }
    case actionTypes.SIGN_IN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        failure: action.payload,
        success: null,
        popUp: true
      }
    case actionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        failure: null
      }
    case actionTypes.SIGN_UP_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        failure: null,
        userCreds: action.payload,
        popUp: true
      }
    case actionTypes.SIGN_UP_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        failure: action.payload,
        userCreds: null,
        popUp: true
      }
    case actionTypes.SIGN_OUT:
      return {
        ...state,
        userCreds: null,
        failure: null,
      }
    case actionTypes.AUTH_POP_UP_CLEAR:
      return {
        ...state,
        failure: null,
        success: null,
        popUp: false
      }
    default: return state;
  }
}

export default authReducer;