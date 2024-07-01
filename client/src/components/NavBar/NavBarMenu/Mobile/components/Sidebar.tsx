import styled, { css } from 'styled-components'
import MobileNavigation from './MobileNavigation'
import {
  PRODUCT_MENU,
  PRODUCT_MENU_SIDEBAR,
  SOLUTIONS_MENU,
  SOLUTIONS_MENU_SIDEBAR
} from '../../../NavBarMenu/util'
import { Link } from 'react-router-dom'
import { Flex } from '~/components/layout/Box'
import { Typography } from '~/components/layout/Typography'
import { Divider } from '~/components/layout/Divider'
import MenuItemContent from '../../components/MenuItemContent'
import { MenuCardType } from '../../components/Card'
import Button from '~/components/ui/Button'
import { RiLoginBoxLine } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'
import { LuLogOut } from 'react-icons/lu'
import { clearAccessToken } from '~/services/api/util'
import { AuthAPI } from '~/services/api'
import { useAppStore } from '~/store'

interface SidebarProps {
  open: boolean
}

function MobileLinks({ cards, title }: { cards: MenuCardType[]; title?: string }) {
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

export default function Sidebar({ open }: SidebarProps) {
  const { t } = useTranslation()
  const { user, logout } = useAppStore()

  async function onLogout() {
    await logout()
  }

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
        {SOLUTIONS_MENU.map((item, i) => {
          return (
            <Flex key={i} flexDirection="column" gap="1rem">
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
      <Flex flexDirection="column" gap={8} p={2}>
        {user ? (
          <>
            <Button variant="outlined" text={t('See profile')} as={Link} to="/profile" />
            <Button onClick={onLogout} text={t('Logout')} icon={<LuLogOut />} />
          </>
        ) : (
          <>
            {' '}
            <Button
              text={t('Login')}
              as={Link}
              to="/login"
              icon={<RiLoginBoxLine />}
              variant="outlined"
            />
            <Button text={t('Sign up')} icon={<RiLoginBoxLine />} />
          </>
        )}
      </Flex>
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
