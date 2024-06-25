import { useTranslation } from 'react-i18next'
import { Flex } from '../layout/Box'
import Button from '../ui/Button'
import { RiLoginBoxLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function NavBarUser() {
  const { t } = useTranslation()
  return (
    <Flex className="navbar-desktop-user" gap="1rem">
      <Button
        text={t('Login')}
        as={Link}
        to="/login"
        icon={<RiLoginBoxLine />}
        variant="outlined"
      />
      <Button text={t('Sign up')} icon={<RiLoginBoxLine />} />
    </Flex>
  )
}
