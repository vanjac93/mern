import { useTranslation } from 'react-i18next'
import { Flex } from '../layout/Box'
import Button from '../ui/Button'
import { RiLoginBoxLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { useAppStore } from '~/store'
import profileImg from '~/assets/employee.jpeg'
import styled from 'styled-components'
import { ROUTES } from '~/utils/constants'
import { NavigationItem, NavigationMenu, NavigationMenuLink } from '../ui/NavigationMenu'

const StyledImg = styled.img`
  width: 60px;
  cursor: pointer;
  height: 60px;
  border-radius: 50%;
`

function UserDropdown() {
  const { logout } = useAppStore()
  const { t } = useTranslation()
  const navigate = useNavigate()

  async function onLogout() {
    await logout()
    navigate(ROUTES.LOGIN)
  }

  return (
    <NavigationMenu style={{ zIndex: 1000 }} aria-label="User Menu" minWidth="100px">
      <NavigationItem
        render={
          <>
            <NavigationMenuLink as={Link} to={ROUTES.PROFILE}>
              {t('My account')}
            </NavigationMenuLink>
            <NavigationMenuLink as="div" onClick={onLogout}>
              {t('Logout')}
            </NavigationMenuLink>
          </>
        }
      >
        <StyledImg src={profileImg} />
      </NavigationItem>
    </NavigationMenu>
  )
}

export default function User() {
  const { t } = useTranslation()
  const user = useAppStore((state) => state.user)
  return (
    <Flex className="navbar-desktop-user" gap="1rem">
      {user ? (
        <UserDropdown />
      ) : (
        <>
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
  )
}
