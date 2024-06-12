import { Link } from 'react-router-dom'
import { NavLink } from './util'
import styled from 'styled-components'

export default function NavItem({ link }: { link: NavLink }) {
  const { text, to } = link
  return (
    <Link to={to}>
      <StyledNavItem>{text}</StyledNavItem>
    </Link>
  )
}

const StyledNavItem = styled.li``
