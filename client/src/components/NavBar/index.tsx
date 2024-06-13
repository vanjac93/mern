import styled from 'styled-components'
import Logo from './Logo'
import NavBarMenu from './NavBarMenu'
import NavBarUser from './NavBarUser'
import { Flex } from '../layout/Box'

export default function NavBar() {
  return (
    <StyledNav>
      <Logo />
      <Flex flex={1} alignItems="center" justifyContent="space-between">
        <NavBarMenu />
        <NavBarUser />
      </Flex>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  height: 80px;
  display: flex;
  background-color: #fff;
  align-items: center;
  padding: 1rem 2rem;
  gap: 3rem;
`
