import { take, all, call, put, cancel, cancelled, fork } from 'redux-saga/effects'
import rsf, { firestore } from '../../firebase/redux-saga-firebase'
import actionTypes from './notifications.types'
import { notificationsRequestSuccess, notificationsRequestFailure } from './notifications.actions'
import { docsToMap } from '../../utils/redux';

export function* notificationsRequestAsync() {
  const channel = rsf.firestore.channel(
    firestore.collection('users').orderBy('created_at', 'desc'));
  try {
    while (true) {
      const querySnapshot = yield take(channel);
      const docs = querySnapshot.docs;
      const users = docsToMap(docs);
      yield put(notificationsRequestSuccess(users))
    }
  } catch (error) {
    notificationsRequestFailure(error.message);
  } finally {
    if (yield cancelled()) {
      channel.close();
    }
  }
};

export function* notificationsRequest() {
  while (yield take(actionTypes.NOTIFICATIONS_REQUEST)) {
    const sync = yield fork(notificationsRequestAsync);

    yield take(actionTypes.NOTIFICATIONS_REQUEST_CANCEL);
    yield cancel(sync);
  }

}


export function* notificationsSaga() {
  yield all([
    call(notificationsRequest)
  ])
}