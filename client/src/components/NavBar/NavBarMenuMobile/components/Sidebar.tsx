import styled, { css } from 'styled-components'
import MobileNavigation from './MobileNavigation'
import {
  PRODUCT_MENU,
  PRODUCT_MENU_SIDEBAR,
  SOLUTIONS_MENU,
  SOLUTIONS_MENU_SIDEBAR
} from '../../NavBarMenu/util'
import MenuItemContent from '../../NavBarMenu/components/MenuContent'
import { Link } from 'react-router-dom'
import { Flex } from '@client/components/layout/Box'
import { Typography } from '@client/components/layout/Typography'
import { CardType } from '../../NavBarMenu/components/Card'
import { Divider } from '@client/components/layout/Divider'

interface SidebarProps {
  open: boolean
}

function MobileLinks({ cards, title }: { cards: CardType[]; title?: string }) {
  return (
    <Flex ml="4rem" flexDirection="column" gap="1rem">
      {title && (
        <Typography fontWeight={200} fontSize="20px">
          {title}
        </Typography>
      )}
      {cards.map((card) => (
        <Link to={card.link} key={card.link}>
          <Typography fontSize="18px">{card.title}</Typography>
        </Link>
      ))}
    </Flex>
  )
}

export default function MobileSidebar({ open }: SidebarProps) {
  function renderProductSubmenu() {
    return (
      <MenuItemContent secondary={PRODUCT_MENU_SIDEBAR} isMobile>
        <MobileLinks cards={PRODUCT_MENU} />
      </MenuItemContent>
    )
  }

  function renderSolutionsSubmenu() {
    return (
      <MenuItemContent secondary={SOLUTIONS_MENU_SIDEBAR} isMobile>
        {SOLUTIONS_MENU.map((item) => {
          return (
            <Flex flexDirection="column" gap="1rem">
              <MobileLinks title={item.title} cards={item.cards} />
              <Divider />
            </Flex>
          )
        })}
      </MenuItemContent>
    )
  }

  return (
    <StyledSidebar $open={open}>
      <MobileNavigation
        items={[
          {
            id: 'product',
            text: 'Product',
            content: renderProductSubmenu()
          },
          {
            id: 'solutions',
            text: 'Solutions',
            content: renderSolutionsSubmenu()
          }
        ]}
      />
    </StyledSidebar>
  )
}

const StyledSidebar = styled.div<{ $open: boolean }>`
  position: fixed;
  z-index: 1000;
  scrollbar-color: yellow;
  overflow-y: scroll;
  top: ${({ theme }) => theme.menu.height};
  background-color: white;
  height: 100%;
  transition: width 0.3s ease-in-out;
  right: 0;

  ${({ theme }) => theme.mq.md} {
    width: 50%;
  }

  ${({ theme }) => theme.mq.sm} {
    width: 100%;
  }

  ${({ $open }) =>
    !$open &&
    css`
      width: 0 !important;
    `}
`
