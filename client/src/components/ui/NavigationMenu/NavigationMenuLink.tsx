import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import styled from 'styled-components'

import { hexToRGB } from '~/utils/style'

export const NavigationMenuLink = styled(NavigationMenuPrimitive.Link)`
  display: block;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
  padding: 10px 12px;
  font-size: 12px;
  white-space: nowrap;
  width: 100%;

  &:hover,
  &[data-state='open'] {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => hexToRGB(theme.colors.bgAlt, 0.2)};
  }
`

export default NavigationMenuLink
