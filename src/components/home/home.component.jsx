import React from 'react'
import { ReactComponent as IconReadLogo } from '../../assets/newspaper.svg'
import { ReactComponent as IconShareLogo} from '../../assets/blogging.svg'

import * as S from './home.styles'

const Home = () => {

  return ( 
    <S.HomeContainer>
      <S.Background />
      <S.Div>
        <S.H3>Connect and join the fun now here in MarioWorld</S.H3>
        <S.Content>
          <S.IconReadContainer>
            <IconReadLogo />
          </S.IconReadContainer>
          <S.ReadText><strong>Read</strong> all the latest happenings.</S.ReadText>
          <S.IconShareContainer>
            <IconShareLogo />
          </S.IconShareContainer>
          <S.ShareText><strong>Share</strong> all the infos that you want.</S.ShareText>
          <S.ShareText></S.ShareText>
        </S.Content>
      </S.Div>
    </S.HomeContainer>
   );
}
 
export default Home;