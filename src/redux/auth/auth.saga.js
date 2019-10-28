import { takeLatest, call, all, put } from 'redux-saga/effects'
import actionTypes from './auth.types'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { signUpRequestSuccess, signUpRequestFailure, signInRequestFailure, signInRequestSuccess } from './auth.actions'

export function* getSnapshotFromUser(user, otherCreds) {
  const userRef = yield call(createUserProfileDocument, user, otherCreds);
  const snapshot = yield userRef.get();
  const userCreds = { ...snapshot.data(), id: snapshot.id };
  return userCreds;
}

export function* signUpRequestAsync({ payload: { email, password, confirmPassword, ...otherCreds } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userCreds = yield call(getSnapshotFromUser, user, otherCreds);
    yield put(signUpRequestSuccess(userCreds))
  } catch (error) {
    yield put(signUpRequestFailure(error.message))
  }
}

export function* signInRequestAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userCreds = yield call(getSnapshotFromUser, user);
    yield put(signInRequestSuccess(userCreds))
  } catch (error) {
    yield put(signInRequestFailure(error.message))
  }
}

export function* signUpRequest() {
  yield takeLatest(actionTypes.SIGN_UP_REQUEST, signUpRequestAsync)
}

export function* signInRequest() {
  yield takeLatest(actionTypes.SIGN_IN_REQUEST, signInRequestAsync)
}

export function* authSaga() {
  yield all([
    call(signUpRequest),
    call(signInRequest)
  ])
}