import React from 'react'

import NotifMessage from '../notifMessage/notifMessage.component'

import * as S from './notification.styles'

const Notification = ({ user: { firstName, lastName } }) => {

  return (
    <S.Li>
      <NotifMessage firstName={firstName} lastName={lastName} />
    </S.Li>
  );
}

export default Notification;