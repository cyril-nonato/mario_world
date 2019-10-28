import * as actions from '../auth.actions';
import actionTypes from '../auth.types';

describe('Auth Actions', () => {

  test('sign-in request should return the expected action', () => {
    const data = 'test'
    const expectedAction = {
      type: actionTypes.SIGN_IN_REQUEST,
      payload: data
    }
    expect(actions.signInRequest(data)).toEqual(expectedAction);
  });

  test('sign-in request success should return the expected action', () => {
    const data = 'test'
    const expectedAction = {
      type: actionTypes.SIGN_IN_REQUEST_SUCCESS,
      payload: data
    }

    expect(actions.signInRequestSuccess(data)).toEqual(expectedAction);
  });

  test('sign-in failure should return the expected action', () => {
    const data = 'test'
    const expectedAction = {
      type: actionTypes.SIGN_IN_REQUEST_FAILURE,
      payload: data
    }
    expect(actions.signInRequestFailure(data)).toEqual(expectedAction);
  });
  
  test('sign-up request should return the expected action', () => {
    const data = 'test'
    const expectedAction = {
      type: actionTypes.SIGN_UP_REQUEST,
      payload: data
    }
    expect(actions.signUpRequest(data)).toEqual(expectedAction);
  });

  test('sign-in request success should return the expected action', () => {
    const data = 'test'
    const expectedAction = {
      type: actionTypes.SIGN_UP_REQUEST_SUCCESS,
      payload: data
    }

    expect(actions.signUpRequestSuccess(data)).toEqual(expectedAction);
  });

  test('sign-in failure should return the expected action', () => {
    const data = 'test'
    const expectedAction = {
      type: actionTypes.SIGN_UP_REQUEST_FAILURE,
      payload: data
    }
    expect(actions.signUpRequestFailure(data)).toEqual(expectedAction);
  });
});