import styled, {keyframes} from 'styled-components'

const entryAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Message = styled.span`
  font-size: 1rem;
  animation: ${entryAnimation} .3s ease-in-out;
`;

export const FullName = styled.span`
  font-weight: bold;
`