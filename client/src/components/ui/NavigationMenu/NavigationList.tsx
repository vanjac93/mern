import { FC, PropsWithChildren } from 'react'

import NavigationMenuIndicator from './NavigationMenuIndicator'
import { StyledArrow, StyledNavigationMenuList } from './styles'

const NavigationList: FC<PropsWithChildren> = (props) => {
  return (
    <StyledNavigationMenuList>
      {props.children}
      <NavigationMenuIndicator>
        <StyledArrow />
      </NavigationMenuIndicator>
    </StyledNavigationMenuList>
  )
}

export default NavigationList
