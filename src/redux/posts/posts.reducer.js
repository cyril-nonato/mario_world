import actionTypes from "./posts.types"

const INITIAL_STATE = {
  loading: false,
  success: null,
  failure: null,
  data: null,
  filteredData: null,
  popUp: false,
}

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        failure: null,
        data: action.payload,
      }
    case actionTypes.POSTS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        failure: action.payload,
        popUp: true,
      }
    case actionTypes.POSTS_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.POSTS_USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        filteredData: action.payload,
      }
    case actionTypes.POSTS_USER_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        failure: action.payload,
        popUp: true,
      }
    case actionTypes.POST_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.POST_CREATE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
        popUp: true
      }
    case actionTypes.POST_CREATE_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        failure: action.payload,
        popUp: true
      }
    case actionTypes.POST_EDIT_REQUEST:
      return {
        ...state,
        loading: true,
        filteredData: null,
      }
    case actionTypes.POST_EDIT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
        popUp: true
      }
    case actionTypes.POST_EDIT_REQUEST_FAILURE:
      return {
        ...state,
        failure: action.payload,
        popUp: true
      }
    case actionTypes.POST_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.POST_DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: true,
        success: action.payload,
        popUp: true
      }
    case actionTypes.POST_DELETE_REQUEST_FAILURE:
      return {
        ...state,
        loading: true,
        failure: action.payload,
        popUp: true
      }
    case actionTypes.POSTS_POP_UP_CLEAR:
      return {
        ...state,
        failure: null,
        success: null,
        popUp: false
      }
    default: return state;
  }
}

export default postsReducer;