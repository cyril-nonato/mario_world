import authReducer from '../auth.reducer'
import actionTypes from '../auth.types'
import { INITIAL_STATE } from '../auth.reducer'


describe('Auth Reducer', () => {
  const mockState = {...INITIAL_STATE}

  test('should return the expected object', () => {

    expect(authReducer({}, {})).toEqual({});

    expect(authReducer(mockState, {})).toEqual(mockState);

    expect(authReducer(mockState, {
      type: actionTypes.SIGN_IN_REQUEST,
      payload: 'test'
    }))
    .toEqual({
      ...mockState,
      loading: true
    })

    expect(authReducer(mockState, {
      type: actionTypes.SIGN_IN_REQUEST_SUCCESS,
      payload: 'test'
    })).toEqual({
      ...mockState,
      loading: false,
      userCreds: 'test'
    });

    expect(authReducer(mockState, {
      type: actionTypes.SIGN_IN_REQUEST_FAILURE,
      payload: 'test'
    })).toEqual({
      ...mockState,
      loading: false,
      error: 'test'
    });

    expect(authReducer(mockState, {
      type: actionTypes.SIGN_UP_REQUEST,
      payload: 'test'
    }))
    .toEqual({
      ...mockState,
      loading: true
    })

    expect(authReducer(mockState, {
      type: actionTypes.SIGN_UP_REQUEST_SUCCESS,
      payload: 'test'
    })).toEqual({
      ...mockState,
      loading: false,
      userCreds: 'test'
    });

    expect(authReducer(mockState, {
      type: actionTypes.SIGN_UP_REQUEST_FAILURE,
      payload: 'test'
    })).toEqual({
      ...mockState,
      loading: false,
      error: 'test'
    });

    
  });
});