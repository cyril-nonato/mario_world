import '@testing-library/jest-dom/extend-expect'
import { runSaga } from 'redux-saga'
import { cleanup } from '@testing-library/react'

import * as firebaseUtils from '../../../firebase/firebase.utils'
import { getSnapshotFromUser, signInRequestAsync } from '../auth.saga';

// Stores any dispatched actions
let dispatchedActions = [];

// Mocks store
const mockStore = {
  getState: () => ({ test: 'test', }),
  dispatch: action => dispatchedActions.push(action)
};

// Start Mocks firebaseutils
firebaseUtils.auth.signInWithEmailAndPassword = jest.fn(() => {
  return {
    user: 'data'
  }
});

firebaseUtils.auth.createUserWithEmailAndPassword = jest.fn(() => {
  return {
    userRef: 'data'
  }
});

const snapshot = ({
  data: jest.fn(),
  id: 'test'
})

firebaseUtils.createUserProfileDocument = jest.fn(() => ({
  get: jest.fn(() => Promise.resolve(snapshot))
})
)



// End Mock firebase utils

afterEach(cleanup);


describe('getSnapshotFromUser Saga', () => {
  beforeEach(() => {
    dispatchedActions = []
  });

  const params = { user: 'test', userCreds: 'test' }

  test('should run without errors', async () => {
    // Mock a saga call
    await runSaga(mockStore, getSnapshotFromUser, params).toPromise();

    expect(firebaseUtils.createUserProfileDocument).toHaveBeenCalledTimes(1);
  });
});

describe('signInRequestAsync Saga', () => {
  beforeEach(() => {
    dispatchedActions = []
  });

  const payload = {
    email: 'test@test.com',
    password: 'test',
    others: 'test'
  }
  test('should run w/o errors', async () => {

    await runSaga(mockStore, signInRequestAsync, { payload }).toPromise();

    jest.mock('../auth.sagas.js', () => jest.fn())

    expect(firebaseUtils.auth.signInWithEmailAndPassword).toHaveBeenCalled();
    expect(getSnapshotFromUser).toHaveBeenCalled();
  });
});