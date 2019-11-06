import React from 'react'
import Notification from '../notification/notification.component';

import * as S from './notifications.styles'

const Notifications = ({selectNotificationsUsers}) => {
  
  return ( 
    <S.UlContainer>
      <S.H3>Notifications</S.H3>
      <S.Div>
      {
        selectNotificationsUsers.map(user => <Notification key={user.id} user={user} />)
      }
      </S.Div>
    </S.UlContainer>
   );
}
 
export default Notifications;