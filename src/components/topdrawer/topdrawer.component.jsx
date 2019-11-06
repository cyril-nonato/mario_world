import React from 'react';

import * as S from './topdrawer.styles';

const Topdrawer = ({ showTopdrawer, user, onClick, onSignOut }) => {
  let content;

  // Show this if there is an aunthenticated user
  if (user) {
    content = (
      <S.UlUser onClick={onClick}>
        <S.LiUser>Mario Bros</S.LiUser>
        <S.Li>
          <S.Links to='/create-a-post'>
            Create a Post
          </S.Links>
        </S.Li>
        <S.Li>
          <S.Links to='/your-posts'>
            Your Posts
          </S.Links>
        </S.Li>
        <S.LiSignOut onClick={onSignOut}>
          Sign-out
        </S.LiSignOut>
      </S.UlUser>
    )
  } else {
  // Show this if there is no aunthenticated user
    content = (
      <S.UlNoUser>
        <S.Li>
          <S.Links to='/sign-in'>
            Sign-in
          </S.Links>
        </S.Li>
        <S.Li>
          <S.Links to='/sign-up'>
            Sign-up
          </S.Links>
        </S.Li>
      </S.UlNoUser>
    )
  }

  return (
    <S.Div showTopdrawer={showTopdrawer}>
      {content}
    </S.Div>

  )
}
export default Topdrawer;