import styled, { css } from 'styled-components'
import backgroundImg from '../../assets/content-bg.jpg'
import theme from '../../utils/theme'
import { Link } from 'react-router-dom'

const skewXNegative = css`
  transform: skewX(-12deg);
`;

const skewXPositive = css`
  transform: skewX(12deg);
`;

const mediaQueryPhone = css`
  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    transform: skewX(0);
  }
`

export const HomeContainer = styled.section`
  width: 50%;
  margin: 5rem auto;
  padding: 3rem 4rem;
  height: 400px;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  ${skewXNegative};
  position: relative;
  overflow: hidden;
  translate: all .3s;
  border: 2px solid ${theme.colors.black};
  box-shadow: 1px 2px 4px rgba(${theme.colors.blackRGB}, .5);
  backface-visibility: hidden;
  ${mediaQueryPhone}

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    padding: 2rem 1rem;
    width: 80%;
  }
`

export const Background = styled.div`
  background-image: url(${backgroundImg});
  background-position: right bottom;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -5;
  ${skewXPositive};

  ${mediaQueryPhone}
`;

export const Div = styled.div`
  border-radius: 5px;
  ${skewXPositive};
  ${mediaQueryPhone}
`;

export const H3 = styled.h3`
  font-size: 2rem;
`;

export const Message = styled.span`
  font-size: 1.2rem;
  display: block;
  padding-top: 3rem;
`;

export const GoToHomepage = styled(Link)`
  margin-top: 2rem;
  display: inline-block;
`;

export const Content = styled.div`
  margin-top: 3rem;
  display: grid;
  width: 100%;
  grid-template-columns: 20% 80%;
  grid-auto-rows: 4rem;
  grid-gap: 1rem;
`;

export const IconReadContainer = styled.div`
  grid-column: 1 / 2;
  
  svg {
    height: 4rem;
  }
`;

export const IconShareContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  svg {
    height: 4rem;
  }
`;

export const ReadText = styled.span`
  grid-column: 2 / 3;
  font-size: 1.3rem;
  align-self: center;
`;

export const ShareText = styled.span`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  font-size: 1.3rem;
  align-self: center;
`
