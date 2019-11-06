import { all, call, takeLatest, put, takeLeading, cancelled, cancel, fork } from 'redux-saga/effects'
import actionTypes from './auth.types'
import rsf, { firebase } from '../../firebase/redux-saga-firebase'
import { signUpRequestSuccess, signUpRequestFailure, signInRequestFailure, signInRequestSuccess } from './auth.actions'
import { filterUserCreds } from '../../utils/redux';

export function* getUserCreds(user) {

  const snapshot = yield call(rsf.firestore.getDocument, `users/${user.uid}`);
  const data = yield snapshot.data();
  const userCreds = {
    ...data,
    user_id: user.uid
  }
  return userCreds
}

export function* signUpRequestAsync({ payload }) {
  try {
    const userData = yield filterUserCreds(payload);
    const { email, password, ...otherData } = userData;
    console.log(userData);

    // Create auth profile for the user
    const { user } = yield call(rsf.auth.createUserWithEmailAndPassword, email, password);

    // Sets user profile in the database
    const creds = {
      email,
      ...otherData,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    }
    yield call(rsf.firestore.setDocument, `users/${user.uid}`, creds);

    // Gets user profile
    const userCreds = yield call(getUserCreds, user);

    // Fire success action
    yield put(signUpRequestSuccess(userCreds));

  } catch (error) {
    yield put(signUpRequestFailure(error.message))
  }
}

export function* signInRequestAsync({ payload: { email, password } }) {
  try {
    // Checks email and password
    const { user } = yield call(rsf.auth.signInWithEmailAndPassword, email, password);

    // Get user Creds
    const userCreds = yield call(getUserCreds, user);
    // Fire success action
    yield put(signInRequestSuccess(userCreds));
  } catch (error) {
    yield put(signInRequestFailure(error.message));
  }
}

export function* signUpRequest() {
  yield takeLeading(actionTypes.SIGN_UP_REQUEST, signUpRequestAsync);

}

export function* signInRequest() {
  // const task = yield takeLatest(actionTypes.SIGN_IN_REQUEST, signInRequestAsync)
  yield takeLatest(actionTypes.SIGN_IN_REQUEST, signInRequestAsync)

}

export function* cancelSaga(task) {
  yield cancel(task)
}

export function* authSaga() {
  yield all([
    call(signInRequest),
    call(signUpRequest),
  ])
}