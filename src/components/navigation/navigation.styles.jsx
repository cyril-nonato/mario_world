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


export const Nav = styled.nav`
  height: 3.5rem;
  width: 100%;
  background: ${theme.colors.black};
`;

export const Ul = styled.ul`
  height: 100%;
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 2fr 4fr 1fr 1fr;
  grid-template-rows: 100%;

  font-size: 1.2rem;
  text-transform: uppercase;
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

export const LiLogin = styled.li`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
`;

export const LiRegister = styled.li`
  grid-column: 4 / 5;
  grid-row: 1 / 2;
`;

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