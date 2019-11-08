import styled, {keyframes, css} from 'styled-components'
import theme from '../../utils/theme';

const successStyles = css`
  background-color: ${theme.colors.green};
`;

const failureStyles = css`
  background-color: ${theme.colors.red};
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    visibility: visible;
  }

  100% {
    opacity: 1;
    visibility: hidden;
  }
`;

const checkProps = props => {
  if(props.success) {
    return successStyles
  } else if (props.failure) {
    return failureStyles
  }
}

export const PopUpContainer = styled.div`
  display: grid;
  width: 40%;
  margin: 0 auto;
  grid-template-columns: 2% 98%;
  animation: ${fadeIn} .5s ease-in-out;
  position: absolute;
  z-index: 50;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);


  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    width: 400px;
  }

`;

export const BorderLeft = styled.div`
  height: 100%;
  border-radius: 5px 0 0 5px;
  width: 100%;
  ${checkProps};
`;

export const ContentContainer = styled.div`
  padding: 1rem;
  width: 100%;
  background-color: ${theme.colors.white};
  border-radius: 0 5px 5px 0;
  box-shadow: 2px 4px 6px ${theme.colors.shadow};
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-gap: 1rem;
  border: 2px solid ${props => props.success ? theme.colors.green : theme.colors.red};
`;

export const IconContainer = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${checkProps}
`;

export const Icon = styled.img`

`;

export const Span = styled.span`
  font-size: 1rem;
  justify-self: left;
  align-self: center;
  
`