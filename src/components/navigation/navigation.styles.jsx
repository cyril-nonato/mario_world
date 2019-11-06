import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import theme from '../../utils/theme'

export const Nav = styled.nav`
  height: 5rem;
  width: 100%;
  background: ${theme.colors.black};
  z-index: 50;
`;

export const Ul = styled.ul`
  height: 100%;
  display: grid;
  width: 90%;
  margin: 0 auto;
  grid-template-columns: 2fr repeat(4, 1fr);
  grid-template-rows: 100%;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export const LiTitle = styled.li`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-self: center;
  justify-self: center;
  height: 70%;
`;

export const HomeLink = styled(NavLink)`
  height: 100%;
`;

export const Brand = styled.img`
  height: 100%;
`;

export const LiNaviIcon = styled.li`
  width: 100%;
  height: 100%;
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  justify-self: center;
  align-self: center;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    grid-column: 6 / 7;
  }
`;

export const NaviIcon = styled.div`
  height: .25rem;
  width: 2.5rem;
  background-color: white;
  position: relative;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  &::before {
    height: inherit;
    width: inherit;
    background-color: inherit;
    border-radius: inherit;
    content: '';
    position: absolute;
    top: -.75rem;
  }

  &::after {
    height: inherit;
    width: inherit;
    background-color: inherit;
    border-radius: inherit;
    content: '';
    position: absolute;
    top: .75rem;
  }
`;