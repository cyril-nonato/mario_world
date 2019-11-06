import {createSelector} from 'reselect'

const selectPosts = state => state.posts;

export const selectPostsData = createSelector(
  [selectPosts],
  posts => posts.data
);

export const selectPostsDataIsLoading = createSelector(
  [selectPosts],
  posts => !!posts.data
);

export const selectPostsFilteredData = createSelector(
  [selectPosts],
  posts => posts.filteredData
);

export const selectPostsFilteredDataIsLoading = createSelector(
  [selectPosts],
  posts => !!posts.filteredData
);

export const selectPostsLoading = createSelector(
  [selectPosts],
  posts => posts.loading
);

export const selectPostsPopUp = createSelector(
  [selectPosts],
  posts => posts.popUp
);

export const selectPostsFailure = createSelector(
  [selectPosts],
  posts => posts.failure
);

export const selectPostsSuccess = createSelector(
  [selectPosts],
  posts => posts.success
)