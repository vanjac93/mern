import { useTranslation } from 'react-i18next'
import { Flex } from '../layout/Box'
import Button from '../ui/Button'
import { RiLoginBoxLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function NavBarUser() {
  const { t } = useTranslation()
  return (
    <Flex className="navbar-desktop-user" gap="1rem">
      <Button as={Link} to="/login" icon={<RiLoginBoxLine />} outlined>
        {t('Login')}
      </Button>
      <Button outlined icon={<RiLoginBoxLine />}>
        {t('Sign up')}
      </Button>
    </Flex>
  )
}
