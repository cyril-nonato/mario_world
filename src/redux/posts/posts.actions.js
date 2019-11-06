import actionTypes from "./posts.types";

export const postsRequest = () => ({
  type: actionTypes.POSTS_REQUEST
});

export const postsRequestSuccess = (posts) => ({
  type: actionTypes.POSTS_REQUEST_SUCCESS,
  payload: posts
});

export const postsRequestFailure = () => ({
  type: actionTypes.POSTS_REQUEST_FAILURE
});

export const postsRequestCancel = () => ({
  type: actionTypes.POSTS_REQUEST_CANCEL
});

export const postCreateRequest = (details) => ({
  type: actionTypes.POST_CREATE_REQUEST,
  payload: details
});

export const postCreateRequestSuccess = (message) => ({
  type: actionTypes.POST_CREATE_REQUEST_SUCCESS,
  payload: message
});

export const postCreateRequestFailure = (message) => ({
  type: actionTypes.POST_CREATE_REQUEST_FAILURE,
  payload: message
});

export const postsUserRequest = (id) => ({
  type: actionTypes.POSTS_USER_REQUEST,
  payload: id
});

export const postsUserRequestSuccess = (posts) => ({
  type: actionTypes.POSTS_USER_REQUEST_SUCCESS,
  payload: posts
});

export const postsUserRequestFailure = (message) => ({
  type: actionTypes.POSTS_USER_REQUEST_FAILURE,
  payload: message
});

export const postEditRequest = (post) => ({
  type: actionTypes.POST_EDIT_REQUEST,
  payload: post
});

export const postEditRequestSuccess = (message) => ({
  type: actionTypes.POST_EDIT_REQUEST_SUCCESS,
  payload: message
});

export const postEditRequestFailure = (message) => ({
  type: actionTypes.POST_EDIT_REQUEST_SUCCESS,
  payload: message
});

export const postDeleteRequest = (id) => ({
  type: actionTypes.POST_DELETE_REQUEST,
  payload: id
});

export const postDeleteRequestSuccess = (message) => ({
  type: actionTypes.POST_DELETE_REQUEST_SUCCESS,
  payload: message
});

export const postDeleteRequestFailure = (message) => ({
  type: actionTypes.POST_DELETE_REQUEST_FAILURE,
  payload: message
});

export const postsPopUpClear = () => ({
  type: actionTypes.POSTS_POP_UP_CLEAR
});