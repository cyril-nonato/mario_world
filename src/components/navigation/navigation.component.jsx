import React, {useState} from 'react'
import Toolbar from '../toolbar/toolbar.component'
import WindowSize from '../../utils/windowSize-hook'
import marioWorldLogo from '../../assets/mario-world.png'
import { checkForMobileView } from '../../utils/components'

import * as S from './navigation.styles'
import Topdrawer from '../topdrawer/topdrawer.component'

const Navigation = ({ selectAuthUserCreds, onSignOut }) => {

  const [showTopdrawer, setShowTopdrawer] = useState(false);

  const windowWidth = WindowSize();
  const mobileView = checkForMobileView(windowWidth)

  const openCloseTopdrawer = () => {
    setShowTopdrawer(!showTopdrawer)
  }

  const closeTopdrawer = e => {
    if(e.target.getAttribute('href')) {
      setShowTopdrawer(false)
    }
  }
  return (
    <S.Nav>
      <S.Ul>
        <S.LiTitle>
          <S.HomeLink to='/'>
            <S.Brand src={marioWorldLogo} alt='Mario World' />
          </S.HomeLink>
        </S.LiTitle>
        {
          !mobileView && <Toolbar onSignOut={onSignOut} user={selectAuthUserCreds} />
        }
        {
          mobileView && 
          <S.LiNaviIcon onClick={openCloseTopdrawer}>
            <S.NaviIcon />
          </S.LiNaviIcon>
        }

      </S.Ul>
      {
        mobileView && <Topdrawer onSignOut={onSignOut} onClick={closeTopdrawer} showTopdrawer={showTopdrawer} user={selectAuthUserCreds} />
      }
    </S.Nav>
  );
}

export default Navigation;