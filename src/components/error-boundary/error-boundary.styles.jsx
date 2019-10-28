import styled from 'styled-components';

export const ErrorBoundaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  z-index: -5;

  @media screen and (min-width: 700px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const ErrorImage = styled.img`
  width: 25%;
  margin: 0 auto;
  margin-bottom: 2rem;
`;


export const ShortDescription = styled.p`
  font-size: 4rem;
  color: red;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const LongDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;