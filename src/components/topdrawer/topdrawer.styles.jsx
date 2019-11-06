import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from '../../utils/theme';

export const positionShow = css`
  opacity: 1;
  visibility: visible;
`;

export const positionHide = css`
  opacity: 0;
  visibility: hidden;
`;

const checkProps = (props) => {
  if(props.showTopdrawer) {
    return positionShow;
  }
  return positionHide;
}

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;


export const Div = styled.div`
  height: 4rem;
  width: 100%;
  background-color: ${theme.colors.black};
  position: absolute;
  z-index: 10;
  h1 {
    color: white;
  } 
  transition: all .4s ease-in-out;
  
  ${checkProps}
`

export const UlUser = styled.ul`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 2rem)
`;

export const UlNoUser = styled.ul`
  height: 100%;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
`;

export const LiUser = styled.li`
  color: white;
  font-size: 1.8rem;
  grid-column: 1 / 3;

  justify-self: center;
  align-self: center;
`

export const Li= styled.li`
  font-size: 1.2rem;
`;

export const Links = styled(NavLink)`
  color: white;
  text-decoration: none;

  &:hover {
    background: ${theme.colors.lightBlack};
  }

  &.active {
    background: ${theme.colors.lightBlack};
  }

  ${center};
`;

export const LiSignOut = styled.li`
  grid-column: 3 / 4;
  grid-row: 1 / 3;

  font-size: 1.6rem;
  color: ${theme.colors.white};

  ${center};

  &:hover {
    cursor: pointer;
    background: ${theme.colors.lightBlack};
  }
`