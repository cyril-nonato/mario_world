import React, { Fragment } from 'react'

import * as S from './notifMessage.styles'

const generateNum = (max, min) => Math.round(Math.random() * (max - min));

const NotifMessage = ({firstName, lastName}) => {

  // Generate number between 0 to 3
  const max = 4;
  const min = 1;

  const randomNum = generateNum(max, min);

  switch (randomNum) {
    case 1:
      return (
        <React.Fragment>
          <S.Message>
            <S.FullName>{firstName} {lastName} </S.FullName>
            has joined the gang.
            </S.Message>
        </React.Fragment>
      )
    case 2:
      return (
        <Fragment>
          <S.Message>
            No more clowning around because 
            <S.FullName> {firstName} {lastName} </S.FullName>
             is here.
          </S.Message>
        </Fragment>
      )
    case 3:
      return (
        <Fragment>
          <S.Message>
            Its fine now. Why? because
            <S.FullName> {firstName} {lastName} </S.FullName>
              is here.
          </S.Message>
        </Fragment>
      )
    default: return (
      <Fragment>
        <S.Message>
          <S.FullName>{firstName} {lastName} </S.FullName> 
          is here to beat the game.
        </S.Message>
       
      </Fragment>
    )
  }
}

export default NotifMessage;