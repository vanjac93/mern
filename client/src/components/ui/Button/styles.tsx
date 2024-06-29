import styled, { css } from 'styled-components'
import { ButtonProps } from './types'
import { getActiveColor, getHoverColor, hexToRGB } from '@client/utils/style'

const buttonProps = ['loading', 'diabled']

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !buttonProps.includes(prop)
})<ButtonProps>`
  all: unset;
  font-family: inherit;
  font-size: ${({ size }) => (size === 'small' ? '12px' : '14px')};
  font-weight: ${({ size }) => (size === 'small' ? 500 : 400)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: ${({ rounded }) => (rounded ? '50%' : '8px')};
  line-height: 1;
  box-shadow: none;
  border: 1px solid;
  flex: none;
  position: relative;
  transition: 300ms;
  pointer-events: ${({ disabled, loading }) => (disabled || loading ? 'none' : 'initial')};

  cursor: pointer;
  opacity: ${({ disabled, loading }) => (disabled || loading ? 0.5 : 1)};

  ${({ theme, variant }) => {
    if (variant === 'outlined') {
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border-color: ${hexToRGB(theme.colors.primary, 0.5)};
        &:hover {
          border-color: ${theme.colors.primary};
        }
      `
    }

    if (variant === 'alert') {
      return css`
        background-color: ${theme.colors.errorSecondary};
        color: ${theme.colors.textUi};
        border-color: ${theme.colors.errorSecondary};

        &:hover {
          background-color: ${getHoverColor(theme.colors.errorSecondary)};
        }
      `
    }

    if (variant === 'text') {
      return css`
        background-color: transparent;
        color: ${theme.colors.primary};
        border-color: transparent;

        &:hover {
          background-color: ${hexToRGB(theme.colors.primary, 0.04)};
        }
      `
    }

    return css`
      background-color: ${theme.colors.primary};
      border-color: transparent;
      color: ${theme.colors.textUi};
      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2);

      &:hover {
        background-color: ${getHoverColor(theme.colors.primary)};
      }

      &:active {
        background-color: ${getActiveColor(theme.colors.primary)};
      }
    `
  }}

  ${({ icon, text, size }) => {
    if (icon && !text) {
      if (size === 'large') {
        return css`
          padding: 0;
          width: 38px;
          height: 38px;
        `
      }
      if (size === 'small') {
        return css`
          padding: 0;
          border-radius: 5px;
          width: 26px;
          height: 26px;
        `
      }
      return css`
        padding: 0;
        width: 30px;
        height: 30px;
      `
    } else if (size === 'large') {
      return css`
        padding: 15px 20px;
        min-width: 90px;
      `
    } else if (size === 'small') {
      return css`
        border-radius: 5px;
        padding: 4px 8px;
      `
    }
    return css`
      padding: 10px 12px;
      min-width: 90px;
    `
  }}
`
