import styled from 'styled-components'
import Logo from './Logo'
import { PRIMARY_LINKS, SECONDARY_LINKS } from './util'
import NavItem from './NavItem'

export default function NavBar() {
  return (
    <StyledNav>
      <Logo />
      <NavItemsContainer className="primary-links">
        {PRIMARY_LINKS.map((link) => (
          <NavItem key={link.to} link={link} />
        ))}
      </NavItemsContainer>
      <NavItemsContainer className="secondary-links">
        {SECONDARY_LINKS.map((link) => (
          <NavItem key={link.to} link={link} />
        ))}
      </NavItemsContainer>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  ${({ theme }) => theme.mq.md} {
    .secondary-links {
      display: none;
    }
  }
`

const NavItemsContainer = styled.ul`
  display: flex;
  gap: 2rem;
`
