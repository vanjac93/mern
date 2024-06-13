import { useTranslation } from 'react-i18next'
import { Flex } from '../layout/Box'
import Button from '../ui/Button'
import { RiLoginBoxLine } from 'react-icons/ri'

export default function NavBarUser() {
  const { t } = useTranslation()
  return (
    <Flex gap="1rem">
      <Button icon={<RiLoginBoxLine />} outlined>
        {t('Login')}
      </Button>
      <Button positive icon={<RiLoginBoxLine />}>
        {t('Sign up')}
      </Button>
    </Flex>
  )
}
