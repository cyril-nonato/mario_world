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

export const NotFoundContainer = styled.div`
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
  backface-visibility: hidden;

  ${mediaQueryPhone}
`;

export const H3 = styled.h3`
  font-size: 2rem;
  color: ${theme.colors.red};
`;

export const Message = styled.span`
  font-size: 1.2rem;
  display: block;
  padding-top: 3rem;
`;

export const GoToHomepage = styled(Link)`
  margin-top: 2rem;
  display: inline-block;
`
