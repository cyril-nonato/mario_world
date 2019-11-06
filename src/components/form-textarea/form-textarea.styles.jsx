import styled from 'styled-components'
import theme from '../../utils/theme'

export const Container = styled.div`
  margin: 1.5rem 0;
`

export const Textarea = styled.textarea`
  border: none;
  border-bottom: 2px solid ${theme.colors.lightBlack};
  padding: .5rem 0;
  font-size: 1.2rem;
  display: inline-block;
  width: inherit;
  font-family: inherit;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ccc;
    text-transform: capitalize;
    font-size: 1rem;
  }

  &:placeholder-shown ~ label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-3rem);
    
  }
`;

export const Label = styled.label`
  transform: translateY(.5rem);
  transition: all .3s;
  display: block;
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: bolder;
`;