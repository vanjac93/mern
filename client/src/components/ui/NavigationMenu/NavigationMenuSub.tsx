import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import styled from 'styled-components'

const NavigationMenuSub = styled(NavigationMenuPrimitive.Sub)`
  background-color: ${({ theme }) => theme.colors.bgAlt};
  /* transform: translate(-100%, -50%); */
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    /* transform: translateX(); */
    li {
      padding: 0;
      display: block;
      height: 100%;
    }
  }
`
export default NavigationMenuSub
