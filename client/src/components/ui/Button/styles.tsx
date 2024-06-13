import styled, { css } from 'styled-components'
import { ButtonProps } from './types'
import tinycolor from 'tinycolor2'
import { space } from 'styled-system'

export const StyledButton = styled.button<ButtonProps & { hasChildren: boolean }>`
  all: unset;

  border-radius: 3px;
  border: 1px solid;

  height: ${({ size }) => (size === 'large' ? '43px' : size === 'small' ? '20px' : '33px')};
  padding: ${({ size }) => (size === 'large' ? '0 35px' : size === 'small' ? '0 15px' : '0 25px')};
  min-width: 30px;
  transition: color 200ms, background-color 200ms, border-color 200ms;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: none;

  cursor: pointer;

  position: relative;

  text-transform: uppercase;
  line-height: 1;

  font-size: ${({ size }) => (size === 'small' ? '10px' : '13px')};
  font-weight: bold;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bgAlt};
  border-color: ${({ theme }) => theme.colors.bgAlt};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.bg};
    border-color: ${({ theme }) => theme.colors.bg};
  }

  i {
    font-size: ${({ size }) => (size === 'large' ? '17px' : '13px')};
    vertical-align: middle;
  }

  ${({ positive }) =>
    positive &&
    css`
      color: ${({ theme }) => theme.colors.bgAlt};
      background-color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};

      &:hover {
        color: ${({ theme }) => theme.colors.bgAlt};
        background-color: ${({ theme }) => tinycolor(theme.colors.primary).lighten(3).toString()};
        border-color: ${({ theme }) => tinycolor(theme.colors.primary).lighten(3).toString()};
      }
    `};
  ${({ negative }) =>
    negative &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.bgAlt};
      border-color: ${({ theme }) => theme.colors.bgAlt};
      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        background-color: ${({ theme }) => theme.colors.bgAlt};
        border-color: ${({ theme }) => theme.colors.bgAlt};
      }
    `};

  ${({ icon, hasChildren, size }) =>
    icon &&
    !hasChildren &&
    css`
      min-width: 10px;
      padding: 0;
      width: ${size === 'large' ? '43px' : '33px'};
      text-align: center;
    `};
  ${({ outlined, icon, hasChildren, size }) =>
    outlined &&
    css`
      border: 1px solid;
      background-color: transparent;
      width: ${icon && !hasChildren ? 33 + 'px' : 'auto'};
      height: 33px;
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.bgAlt};
      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        background-color: transparent;
        border-color: ${({ theme }) => theme.colors.bgAlt};
      }
    `};

  ${({ loading }) =>
    loading &&
    css`
      color: transparent !important;
      transition: none;
    `};

  ${space}

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`
