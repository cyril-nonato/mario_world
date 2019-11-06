import styled from 'styled-components';
import theme from '../../utils/theme';

export const BackdropContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(${theme.colors.blackRGB}, .3);
  top: 0;
  left: 0;
`