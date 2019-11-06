import styled from 'styled-components'
import theme from '../../utils/theme'

export const Section = styled.section`
  width: 50%;
  margin: 5rem auto;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  border: 2px solid ${theme.colors.black};
  box-shadow: 1px 2px 4px rgba(${theme.colors.blackRGB}, .5);

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    width: 80%;
  }
`;

export const H2 = styled.h2`
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;


export const Form = styled.form`
  padding: 2rem;
  width: 70%;
  margin: 0 auto;

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    width: 100%;
  }

  input {
    width: 100%;
  }

  textarea {
    width: 100%;
  }

  button {
    margin-top: 1rem;
  }
`