import logo from '~/assets/logoipsum-330.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Logo() {
  return (
    <Link to="/">
      <StyledImg alt="Logo" src={logo} />
    </Link>
  )
}

const StyledImg = styled.img`
  width: 170px;
  height: 80px;
`
