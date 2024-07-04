import styled from 'styled-components'
import Logo from './Logo'
import { Flex } from '../layout/Box'
import NavBarMenu from './NavBarMenu/Desktop'
import NavBarMenuMobile from './NavBarMenu/Mobile'
import User from './User'

export default function NavBar() {
  return (
    <StyledNav>
      <Logo />
      <NavBarMenu />
      <NavBarMenuMobile />
      <User />
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  padding: 1rem 2rem;
  gap: 3rem;

  ${({ theme }) => theme.mq.md} {
    .navbar-desktop-menu,
    .navbar-desktop-user {
      display: none;
    }
  }
`
