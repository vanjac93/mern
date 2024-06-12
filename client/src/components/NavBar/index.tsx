import styled from 'styled-components'
import Logo from './Logo'
import NavBarMenu from './NavBarMenu'
import NavBarUser from './NavBarUser'

export default function NavBar() {
  return (
    <StyledNav>
      <Logo />
      <NavBarMenu />
      <NavBarUser />
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  height: 80px;
  display: flex;
  background-color: aliceblue;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`
