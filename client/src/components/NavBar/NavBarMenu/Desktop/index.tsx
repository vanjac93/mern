import styled from 'styled-components'
import { NAV_ITEMS } from '../util'
import { Flex } from '~/components/layout/Box'
import { NavigationMenu, NavigationItem } from '~/components/ui/NavigationMenu'
import { Link } from 'react-router-dom'
import { FaArrowDown } from 'react-icons/fa'

export default function NavBarMenu() {
  return (
    <Container className="navbar-desktop-menu">
      <NavigationMenu>
        <Flex gap="2rem">
          {NAV_ITEMS.map((itm) => {
            return (
              <NavigationItem key={itm.id} render={itm.content}>
                {itm.to ? (
                  <Link to={itm.to}>{itm.text}</Link>
                ) : (
                  <Flex style={{ cursor: 'pointer' }} gap={8} alignItems="center">
                    <span>{itm.text}</span>
                    <FaArrowDown className="caret" size="10px" />
                  </Flex>
                )}
              </NavigationItem>
            )
          })}
        </Flex>
      </NavigationMenu>
    </Container>
  )
}

const Container = styled.div`
  button,
  p {
    all: unset;
  }
`
