import styled, { css } from 'styled-components'
import backgroundImg from '../../assets/content-bg.jpg'
import theme from '../../utils/theme'

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

export const LiContainer = styled.li`
  padding: 3rem 4rem;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  ${skewXNegative};
  position: relative;
  overflow: hidden;
  translate: all .3s;
  border: 2px solid ${theme.colors.black};
  box-shadow: 1px 2px 4px rgba(${theme.colors.blackRGB}, .5);

  ${mediaQueryPhone}

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    padding: 2rem 1rem;
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
  ${skewXPositive};

  ${mediaQueryPhone}
`

export const Div = styled.div`
  border-radius: 5px;
  ${skewXPositive};

  ${mediaQueryPhone}
`;

export const H3 = styled.h3`
  font-size: 1.6rem;
`;

export const TimeAgo = styled.div`
  color: ${theme.colors.grey};
  font-size: .8rem;
  margin-bottom: 2rem;
`;

export const P = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  width: 85%;

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    width: 80%;
  }
`;

export const PostedBy = styled.div`
  font-size: 1rem;
`
