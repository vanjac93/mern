import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import styled from 'styled-components'

const NavigationMenuIndicator = styled(NavigationMenuPrimitive.Indicator)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 10px;
  top: 100%;
  overflow: hidden;
  z-index: 1;
  transition: width, transform 250ms ease;

  /* &[data-state='visible'] {
    animation: fadeIn 200ms ease;
  }
  &[data-state='hidden'] {
    animation: fadeOut 200ms ease;
  } */
`
export default NavigationMenuIndicator
