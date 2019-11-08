import React, {useEffect} from 'react'
import ThumbsUpLogo from '../../assets/thumbs-up.svg'
import ThumbsDownLogo from '../../assets/thumbs-down.svg'
import * as S from './pop-up.styles'

const PopUp = ({ success, failure, clearAll, checkPopUp }) => {
  useEffect(() => {

    // Resets success, failure, popUp state to default
    return () => {
      clearAll();
    }

  }, [clearAll])

  if (!checkPopUp) {
    return null;
  }

  return (
    <S.PopUpContainer  onClick={clearAll}>
      <S.BorderLeft success={success} failure={failure} />
      <S.ContentContainer success={success} failure={failure}>
        <S.IconContainer success={success} failure={failure}>
          {
            success &&
            <S.Icon src={ThumbsUpLogo} />
          }
          {
            failure &&
            <S.Icon src={ThumbsDownLogo} />
          }
        </S.IconContainer>
        {
          success &&
          <S.Span>{success}</S.Span>
        }
        {
          failure &&
          <S.Span>{failure}</S.Span>
        }
      </S.ContentContainer>
    </S.PopUpContainer>
  );
}

export default React.memo(PopUp);