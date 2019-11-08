import React from 'react'
import * as S from './backdrop.styles';

const Backdrop = ({ onClick }) => {
  return (
    <S.BackdropContainer data-testid='backdrop' onClick={onClick} />
  );
}

export default React.memo(Backdrop);