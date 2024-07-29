import styled, { css } from 'styled-components'
import { rtl } from '~/utils/style'
import * as Tabs from '@radix-ui/react-tabs'
import { ColorProps, color } from 'styled-system'

export const TabsList = styled(Tabs.List)<ColorProps>`
  background-color: ${({ theme }) => theme.colors.bgAlt};
  display: inline-flex;
  border-radius: 4000px;
  background-color: ${({ theme }) => theme.colors.bgAlt2};
  ${color}
`

export const TabListItem = styled(Tabs.Trigger)`
  all: unset;
  height: 40px;
  border-radius: 1000px;
  border-radius: 4000px;
  padding: 0.5rem 1rem;

  cursor: pointer;
  outline: none;
  color: ${({ theme }) => theme.colors.textUi};

  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.bgAlt};
      color: ${theme.colors.primary};
    `}
  }

  &[data-state='active'] {
    ${({ theme }) => css`
      color: ${theme.colors.textUi};
      background-color: ${theme.colors.primary};
    `}
  }
`

export const StyledTabTrigger = styled.span<{ basic?: true }>`
  font-weight: 400;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &[data-state='active'] {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }

  /* ${({ theme, basic }) =>
    !basic &&
    css`
      border-radius: 5px;
      background-color: ;
      padding: 8px 12px;
      border: 1px solid ${theme.colors.uiBackground};
      font-size: 12px;

      &:not(:last-child) {
        ${rtl('margin-right', 'margin-left')}: 10px;
      }
      &[data-state='active'] {
        font-weight: 400;
        color: ${({ theme }) => theme.colors.secondary};
      }
      &:hover {
        background-color: ${theme.colors.bgAlt};
      }
    `}; */
`

export const StyledAdminTabTrigger = styled(StyledTabTrigger)`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, basic }) => (!basic ? theme.colors.bgAlt : 'transparent')};
  font-size: 12px;

  ${({ theme, basic }) =>
    basic &&
    css`
      border-radius: none !important;
      background-color: transparent !important;
    `};

  &[data-state='active'] {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme, basic }) => (!basic ? theme.colors.bg : 'transparent')};
  }
`
