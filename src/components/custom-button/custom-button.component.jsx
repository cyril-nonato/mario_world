import React from 'react';

import * as S from './custom-button.styles';

const CustomButton = ({ onClick, type, children }) => {
  return ( 
    <S.Button data-testid='button' type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
}

export default React.memo(CustomButton);