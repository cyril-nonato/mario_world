import styled, {css} from 'styled-components'
import theme from '../../utils/theme';

const visible = css`
  opacity: 1;
  visibility: visible;
`;

const hidden = css`
  opacity: 0;
  visibility: hidden;
`;

const visibleForm = css`
  transform: scale(1);
`;

const hiddenForm = css`
  transform: scale(.4);
`

const visibileOrHiddenContainer = props => {
  if(props.content && props.title) {
    return visible;
  }
  return hidden;
};

const visibleOrHiddenForm = props => {
  if(props.content && props.title) {
    return visibleForm
  }
  return hiddenForm
}

export const EditDeletePostContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 50;
  top: 0;
  left: 0;
  transition: all .5s ease-in-out;
  ${visibileOrHiddenContainer};
`;

export const Form = styled.form`
  position: relative;
  width: 50%;
  margin: 10rem auto;
  z-index: 150;
  background-color: ${theme.colors.white};
  padding: 2rem 3rem;
  border: 2px solid ${theme.colors.black};
  border-radius: 5px;
  transition: all .3s ease-in-out;

  ${visibleOrHiddenForm};


  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    width: 80%;
  }

  input {
    width: 100%;
  }

  textarea {
    width: 100%;
  }
`;

export const H2 = styled.h2`
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`