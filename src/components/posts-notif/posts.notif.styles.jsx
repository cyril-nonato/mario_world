import styled from 'styled-components'

import theme from '../../utils/theme'

export const PostsNotifContainer = styled.main`
  display: grid;
  width: 85%;
  margin: 2rem auto;
  grid-template-columns: 2fr 1.2fr;
  grid-auto-rows: auto;
  grid-gap: 4rem;

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    grid-template-columns: 1fr;
    width: 90%;
    grid-gap: 2rem;
  }
`;

export const Notif = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

export const Post = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

