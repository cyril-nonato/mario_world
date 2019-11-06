import { call, all } from 'redux-saga/effects'
import { postsSaga } from './posts/posts.saga'
import { authSaga } from './auth/auth.saga'
import { notificationsSaga } from './notifications/notifications.sagas'

function* rootSaga() {
  yield all([
    call(postsSaga),
    call(authSaga),
    call(notificationsSaga)
  ])
};

export default rootSaga;