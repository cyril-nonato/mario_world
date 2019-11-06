import styled from 'styled-components'

export const PostsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  li:not(:last-child) {
    margin-bottom: 2rem;
  }
`;