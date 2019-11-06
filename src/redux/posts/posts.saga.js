import { take, all, call, takeLatest, put, select, fork, cancel, cancelled } from 'redux-saga/effects'
import actionTypes from './posts.types'
import rsf, { firestore, firebase } from '../../firebase/redux-saga-firebase'
import { postsRequestSuccess, postsUserRequestSuccess, postCreateRequestSuccess, postCreateRequestFailure, postEditRequestSuccess, postEditRequestFailure, postsUserRequestFailure, postDeleteRequestSuccess, postDeleteRequestFailure } from './posts.actions'
import { selectAuthUserCreds } from '../auth/auth.selector';
import { docsToMap, checkTitleAndContentLength } from '../../utils/redux';

export function* postsRequestAsync() {
  const channel = yield rsf.firestore.channel(
    firestore.collection('posts').orderBy('created_at', 'desc'));

  try {
    while (true) {
      const querySnapshot = yield take(channel);
      const docs = querySnapshot.docs;
      const posts = docsToMap(docs);
      yield put(postsRequestSuccess(posts));
    }

  } catch (error) {

  } finally {
    if (yield cancelled()) {
      channel.close();
    }
  }
}

export function* postsRequest() {
  while (yield take(actionTypes.POSTS_REQUEST)) {
    const sync = yield fork(postsRequestAsync);

    yield take(actionTypes.POSTS_REQUEST_CANCEL);
    yield cancel(sync);
  }
  // yield takeLatest(actionTypes.POSTS_REQUEST, postsRequestAsync);

}

export function* postCreateRequestAsync({ payload: { title, content } }) {
  try {
    yield checkTitleAndContentLength(title, content);
    const user = yield select(selectAuthUserCreds);
    const post = {
      title,
      content,
      posted_by: `${user.firstName} ${user.lastName}`,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      user_id: user['user_id'],
      edited: false
    }
    yield call(rsf.firestore.addDocument, 'posts', post);
    yield put(postCreateRequestSuccess('Your post is successfully created'));
  } catch (error) {
    yield put(postCreateRequestFailure(error.message));
  }
}

export function* postsUserRequestAsync() {
  const { user_id } = yield select(selectAuthUserCreds);
  const channel = yield call(rsf.firestore.channel,
    firestore.collection('posts').orderBy('created_at', 'desc').where('user_id', '==', `${user_id}`))

  try {

    while (true) {
      const querySnapshot = yield take(channel);
      const docs = querySnapshot.docs;
      const filteredPosts = docsToMap(docs);
      yield put(postsUserRequestSuccess(filteredPosts));
    }

  } catch (error) {
    yield put(postsUserRequestFailure(error.message))
  }
}

export function* postEditRequestAsync({ payload: { id, ...otherProperties } }) {
  try {
    const updatePost = { ...otherProperties, created_at: firebase.firestore.FieldValue.serverTimestamp(), edited: true };
    yield call(rsf.firestore.updateDocument, `posts/${id}`, updatePost);
    yield put(postEditRequestSuccess(`Your post was successfully edited`))
  } catch (error) {
    yield put(postEditRequestFailure(`Can't edit the post, please try again later`))
  }

}

export function* postDeleteRequestAsync({payload}) {
  try {
    yield call(rsf.firestore.deleteDocument, `posts/${payload}`);
    yield put(postDeleteRequestSuccess(`Your post was successfully deleted`));
  } catch (error) {
    yield put(postDeleteRequestFailure(`Can't delete the post, please try again later`));
  }
}


export function* postCreateRequest() {
  yield takeLatest(actionTypes.POST_CREATE_REQUEST, postCreateRequestAsync);
}

export function* postsUserRequest() {
  yield takeLatest(actionTypes.POSTS_USER_REQUEST, postsUserRequestAsync)
}

export function* postEditRequest() {
  yield takeLatest(actionTypes.POST_EDIT_REQUEST, postEditRequestAsync)
}

export function* postDeleteRequest() {
  yield takeLatest(actionTypes.POST_DELETE_REQUEST, postDeleteRequestAsync);
}


export function* postsSaga() {
  yield all([
    call(postsRequest),
    call(postCreateRequest),
    call(postsUserRequest),
    call(postEditRequest),
    call(postDeleteRequest)
  ])
}