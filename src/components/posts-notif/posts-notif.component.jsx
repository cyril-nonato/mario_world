import React, { useEffect, Fragment } from 'react'
import PostsContainer from '../posts/posts.container'

import * as S from './posts.notif.styles'
import NotificationsContainer from '../notifications/notifications.container';

const PostsNotif = ({ onNotificationsRequestCancel, onPostsRequest, onNotificationsRequest, onPostsRequestCancel }) => {

  useEffect(() => {
    onPostsRequest();

    return () => {
      onPostsRequestCancel();
    }
  }, [onPostsRequest, onPostsRequestCancel]);

  useEffect(() => {

    onNotificationsRequest();

    return () => {

      onNotificationsRequestCancel();
    }

  }, [onNotificationsRequest, onNotificationsRequestCancel])

  return (
    <Fragment>
      <S.PostsNotifContainer>
        <S.Notif>
          <NotificationsContainer />
        </S.Notif>
        <S.Post>
          <PostsContainer />
        </S.Post>
      </S.PostsNotifContainer>
    </Fragment>
  );
}

export default PostsNotif;