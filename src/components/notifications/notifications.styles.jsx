import styled, {css} from 'styled-components'

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

export const UlContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 220px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${theme.colors.white};
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid ${theme.colors.black};
  box-shadow: 1px 2px 4px rgba(${theme.colors.blackRGB}, .5);

  ${skewXNegative};
  ${mediaQueryPhone};
`;

export const Div = styled.div`

  position: relative;
  overflow: hidden;
  padding: 0 1rem;

  li:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${skewXPositive}
  ${mediaQueryPhone};
`


export const H3 = styled.h3`
  font-size: 1.3rem;
  ${skewXPositive};
  text-transform: uppercase;
  margin-bottom: 1rem;

  ${mediaQueryPhone};
`