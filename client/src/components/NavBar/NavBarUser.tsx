import { useTranslation } from 'react-i18next'
import { Flex } from '../layout/Box'
import Button from '../ui/Button'
import { RiLoginBoxLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { useAppStore } from '~/store'
import Dropdown from '../ui/Dropdown/Dropdown'
import profileImg from '~/assets/employee.jpeg'
import styled from 'styled-components'
import DropdownMenu from '../ui/Dropdown/DropdownMenu'
import DropdownMenuItem from '../ui/Dropdown/DropdownMenuItem'
import { ROUTES } from '~/utils/constants'

const StyledImg = styled.img`
  width: 60px;
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
    <Dropdown trigger={<StyledImg alt="Profile image" src={profileImg} />}>
      <DropdownMenu portalProps={{}} sideOffset={10}>
        <DropdownMenuItem onClick={() => navigate(ROUTES.PROFILE)}>{t('Profile')}</DropdownMenuItem>
        <DropdownMenuItem onClick={onLogout}>{t('Logout')}</DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default function NavBarUser() {
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
