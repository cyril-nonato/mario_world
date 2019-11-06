import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import theme from '../../utils/theme'

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LiTitle = styled.li`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-self: center;
  justify-self: center;
`;

export const HomeLink = styled(NavLink)`
  font-size: 1.8rem;
  color: ${theme.colors.white};
  letter-spacing: 1px;
`

export const LiCreatePost = styled.li`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
`;

export const LiYourPosts = styled.li`
  grid-column: 4 / 5;
  grid-row: 1 / 2;
`;

export const LiSignIn = styled.li`
  grid-column: 4 / 5;
  grid-row: 1 / 2;
`;

export const LiSignUp = styled.li`
  grid-column: 5 / 6;
  grid-row: 1 / 2;
`;

export const LiSignOut = styled.li`
  grid-column: 5 / 6;
  grid-row: 1 / 2;
`;


export const User = styled.div`
  color: white;
  ${center}
  font-size: 1.2rem;
`;

export const SignOut = styled.div`
  transition: all .3s ease-in-out;
  color: ${theme.colors.white};

  &:hover {
    background: ${theme.colors.lightBlack};
    cursor: pointer;
  }

  ${center};
`

export const Links = styled(NavLink)`
  transition: all .3s ease-in-out;
  color: ${theme.colors.white};

  &:hover {
    background: ${theme.colors.lightBlack};
  }

  &.active {
    background: ${theme.colors.lightBlack};
  }

  ${center};
`