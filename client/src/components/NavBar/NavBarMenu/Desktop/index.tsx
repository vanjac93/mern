import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import styled from 'styled-components'
import { NAV_ITEMS } from '../util'
import NavItem from '../components/NavItem'
import { Box } from '@client/components/layout/Box'

export default function NavBarMenu() {
  return (
    <Container className="navbar-desktop-menu">
      <StyledNavRoot>
        <StyledNavList>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </StyledNavList>
        <StyledNavViewportContainer>
          <StyledNavViewport />
        </StyledNavViewportContainer>
      </StyledNavRoot>
    </Container>
  )
}

const StyledNavViewportContainer = styled(Box)`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 70px;
  left: 50%;
  margin: 0 auto;
  perspective: 2000px;
  transform: translateX(-50%);
  width: 75vw;

  ${({ theme }) => theme.mq.xl} {
    width: 75vw;
  }

  ${({ theme }) => theme.mq.lg} {
    width: 85vw;
  }

  ${({ theme }) => theme.mq.md} {
    width: 100vw;
  }
`

const Container = styled.div`
  button,
  p {
    all: unset;
  }
`

const StyledNavViewport = styled(NavigationMenu.Viewport)`
  position: relative;
  transform-origin: top center;
  margin-top: 10px;
  width: 100%;
  background-color: white;
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  height: var(--radix-navigation-menu-viewport-height);
  transition: width, height, 300ms ease;
`

const StyledNavRoot = styled(NavigationMenu.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
`

const StyledNavList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  list-style: none;
  box-shadow: 0 2px 10px var(--black-a7);
  margin: 0;
  gap: 1.5rem;
  align-items: center;
`
