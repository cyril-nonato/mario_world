import styled from 'styled-components'
import theme from '../../utils/theme'
import signUpFormImg from '../../assets/sign-up-form.png'
import {Link} from 'react-router-dom'

export const Section = styled.section`
  width: 70%;
  margin: 5rem auto;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.2fr;

  @media only screen and (max-width: ${theme.mediaQueries.phone}px) {
    width: 90%;
    border: 2px solid ${theme.colors.black};
  }
`;

export const DivBg = styled.div`
  grid-column: 1 / 2;
  background-image: linear-gradient(
    to left bottom, 
    rgba(${theme.colors.blackRGB}, .8), rgba(${theme.colors.blackRGB}, .8)),     
  url(${signUpFormImg});
  background-position: center;
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
`;

export const Form = styled.form`
  grid-column: 2 / 3;
  width: 80%;
  margin: 0 auto;
  padding: 2rem;

  input {
    width: 100%;
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

export const LinkToSignIn = styled(Link)`
  color: ${theme.colors.black};
  font-weight: bolder;
  margin-left: 1rem;
`;