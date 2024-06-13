import styled, { css } from 'styled-components'

import { Typography } from '@client/components/layout/Typography'
import { Loading } from '@client/components/ui/Loading'

const LoadingScreen = ({ zIndex, text }: { zIndex?: number; text?: string }) => {
  return (
    <LoadingStyled $zIndex={zIndex}>
      <Loading large />
      {text && <Typography className="text">{text}</Typography>}
    </LoadingStyled>
  )
}

export const LoadingScreenCSS = css`
  position: absolute;
  top: 0 !important;
  left: 0 !important;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.bg};
  font-size: 16px;
  line-height: 1;
  animation-fill-mode: both;
  animation-duration: 0.5s;
  transition: background-color 0.5s linear;
  user-select: none;
  will-change: opacity;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  .text {
    font-size: 13px;
    position: absolute;
    top: calc(50% + 30px);
    left: 50%;
    transform: translateX(-50%);
  }
`

const LoadingStyled = styled.div<{ $zIndex?: number }>`
  ${LoadingScreenCSS}
  z-index: ${({ $zIndex }) => $zIndex};
`

export default LoadingScreen
