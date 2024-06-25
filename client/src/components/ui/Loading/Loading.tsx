import styled from 'styled-components'

import { hexToRGB } from '@client/utils/style'

const Loading = styled.div<{ large?: true; small?: boolean }>`
  display: inline-block;
  flex: none;
  border: 2px solid ${({ theme }) => hexToRGB(theme.colors.bgAlt, 0.5)};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.textUi}; // make global variable
  animation: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  width: ${({ large, small }) => (large ? '30px' : small ? '10px' : '20px')};
  height: ${({ large, small }) => (large ? '30px' : small ? '10px' : '20px')};
`

export default Loading
