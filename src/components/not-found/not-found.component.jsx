import React from 'react'

import * as S from './not-found.styles'
import CustomButton from '../custom-button/custom-button.component'

const NotFound = () => {
  return ( 
    <S.NotFoundContainer>        
      <S.Background />
      <S.Div>
        <S.H3>404</S.H3>
        <S.Message>The page you're looking for cannot be found. Go back to home page by pressing the homepage button</S.Message>
        <S.GoToHomepage to='/'>
          <CustomButton>
            Home page
          </CustomButton>
        </S.GoToHomepage>
      </S.Div>
    </S.NotFoundContainer>
   );
}
 
export default NotFound;