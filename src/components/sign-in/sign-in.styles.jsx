import styled from 'styled-components'
import theme from '../../utils/theme'
import signInFormImg from '../../assets/sign-in-form.jpg'
import {Link} from 'react-router-dom'

export const Section = styled.section`
  width: 70%;
  margin: 5rem auto;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  grid-template-rows: 500px;
  border: 2px solid ${theme.colors.black};

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    width: 90%;
    border: 2px solid ${theme.colors.black};
  }

`;

export const DivBg = styled.div`
  background-image: linear-gradient(
    to left bottom, 
    rgba(${theme.colors.blackRGB}, .8), rgba(${theme.colors.blackRGB}, .8)),     
  url(${signInFormImg});
  background-position: right;
  background-size: cover;
  padding: 2rem;
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    display: none;
  }
`;

export const H2 = styled.h2`
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Span = styled.span`
  font-size: 1rem;
  margin-top: 1.5rem;
  text-align: center;
`;

export const Form = styled.form`
  width: 80%;
  margin: auto;
  padding: 2rem;

  input {
    width: 100%;
    background-color: transparent;
  }

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    grid-column: 1 / 3;
  }
`;

export const H3 = styled.h3`
  text-transform: uppercase;
  font-size: 1.4rem;
`;

export const SpanLink = styled.span`
  display: block;
  margin-top: 2rem;
  font-size: 1rem;
`;

export const LinkToSignUp = styled(Link)`
  color: ${theme.colors.black};
  font-weight: bolder;
  margin-left: 1rem;
`
