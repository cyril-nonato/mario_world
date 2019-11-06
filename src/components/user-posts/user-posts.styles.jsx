import styled from 'styled-components'
import theme from '../../utils/theme'

export const UserPostsContainer = styled.ul`
  width: 60%;
  margin: 2rem auto;
  li:not(:last-child) {
    margin-bottom: 2rem;
  }

  li:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    width: 90%;
  }

`