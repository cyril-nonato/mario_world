import {createSelector} from 'reselect'

const selectAuth = state => state.auth;

export const selectAuthUserCreds = createSelector(
  [selectAuth],
  auth => auth.userCreds
);

export const selectAuthLoading = createSelector(
  [selectAuth],
  auth => auth.loading
);

export const selectAuthIsAuth = createSelector(
  [selectAuthUserCreds],
  userCreds => !!userCreds
);

export const selectAuthPopUp = createSelector(
  [selectAuth],
  auth => auth.popUp
);

export const selectAuthFailure = createSelector(
  [selectAuth],
  auth => auth.failure
);

export const selectAuthSuccess = createSelector(
  [selectAuth],
  auth => auth.success
);