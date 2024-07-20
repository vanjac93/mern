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
              // eslint-disable-next-line react/jsx-no-useless-fragment
              <NavigationItem key={itm.id} render={<>{itm.content}</>}>
                {itm.to ? (
                  <StyledLink to={itm.to}>
                    <Test>{itm.text}</Test>
                  </StyledLink>
                ) : (
                  <Test>
                    <span style={{ fontWeight: 500 }}>{itm.text}</span>
                    <FaArrowDown className="caret" size="10px" />
                  </Test>
                )}
              </NavigationItem>
            )
          })}
        </Flex>
      </NavigationMenu>
    </Container>
  )
}

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`

const Test = styled(Flex)`
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  gap: 8px;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgAlt};
  }

  .caret {
    transition: transform 0.3s ease-in-out;
  }

  &[data-state='open'] {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.bgAlt};

    .caret {
      transform: rotate(180deg);
    }
  }
`

const Container = styled.div`
  button,
  p {
    all: unset;
  }
`
