import React from 'react'

import * as S from './toolbar.styles'

const Toolbar = ({ user, onSignOut }) => {
  return (
    <React.Fragment>
      {
        user &&
        <S.LiCreatePost>
          <S.Links to='/create-a-post'>create a post</S.Links>
        </S.LiCreatePost>
      }
      {
        user &&
        <S.LiYourPosts>
        <S.Links to='/your-posts'>{user.firstName} {user.lastName}</S.Links>
        </S.LiYourPosts>
      }

      {
        user &&
        <S.LiSignOut>
          <S.SignOut onClick={onSignOut}>sign-out</S.SignOut>
        </S.LiSignOut>
      }

      {
        !user &&
        <S.LiSignIn>
          <S.Links to='/sign-in'>sign-in</S.Links>
        </S.LiSignIn>}
      {
        !user &&
        <S.LiSignUp>
          <S.Links to='/sign-up'>sign-up</S.Links>
        </S.LiSignUp>
      }
    </React.Fragment>
  );
}

export default Toolbar;