import styled from 'styled-components'
import theme from '../../utils/theme'

export const Button = styled.button`
  color: ${theme.colors.white};
  font-weight: bolder;
  background-color: ${theme.colors.lightBlack};
  border: none;
  border-radius: 2px;
  padding: .6rem 1.2rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;