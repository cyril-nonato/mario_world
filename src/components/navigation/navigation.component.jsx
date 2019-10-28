import React from 'react'

import * as S from './navigation.styles'

const Navigation = () => {
  return (
    <S.Nav>
      <S.Ul>
        <S.LiTitle>
          <S.HomeLink to='/'>mario world</S.HomeLink>
        </S.LiTitle>
        <S.LiLogin>
          <S.Links to='/sign-in'>sign-in</S.Links>
        </S.LiLogin>
        <S.LiRegister>
          <S.Links to='/sign-up'>sign-up</S.Links>
        </S.LiRegister>
      </S.Ul>
    </S.Nav>
  );
}

export default Navigation;