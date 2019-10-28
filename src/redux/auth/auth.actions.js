import actionTypes from "./auth.types";

export const signInRequest = (userCreds) => ({
  type: actionTypes.SIGN_IN_REQUEST,
  payload: userCreds
});

export const signInRequestSuccess = (userCreds) => ({
  type: actionTypes.SIGN_IN_REQUEST_SUCCESS,
  payload: userCreds
});

export const signInRequestFailure = (message) => ({
  type: actionTypes.SIGN_IN_REQUEST_FAILURE,
  payload: message
});

export const signUpRequest = (userCreds) => ({
  type: actionTypes.SIGN_UP_REQUEST,
  payload: userCreds
});

export const signUpRequestSuccess = (userCreds) => ({
  type: actionTypes.SIGN_UP_REQUEST_SUCCESS,
  payload: userCreds
});

export const signUpRequestFailure = (message) => ({
  type: actionTypes.SIGN_UP_REQUEST_FAILURE,
  payload: message
});