import styled from 'styled-components'
import { RiMenuLine } from 'react-icons/ri'
import { useState } from 'react'
import { RiCloseLargeLine } from 'react-icons/ri'
import Sidebar from './components/Sidebar'

export default function NavBarMenuMobile() {
  const [open, setOpen] = useState(false)

  function toggleOpen() {
    setOpen((prev) => !prev)
  }

  return (
    <Container>
      {open ? (
        <RiCloseLargeLine cursor="pointer" size="2rem" onClick={toggleOpen} />
      ) : (
        <RiMenuLine onClick={toggleOpen} cursor="pointer" size="2rem" />
      )}
      <Sidebar open={open} />
    </Container>
  )
}

const Container = styled.div`
  display: none;

  ${({ theme }) => theme.mq.md} {
    display: flex;
  }
`
