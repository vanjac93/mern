import Page from '~/components/Page'
import { Flex } from '~/components/layout/Box'
import Field from '~/components/ui/Form/Field'
import Form from '~/components/ui/Form/Form'
import { useAppStore } from '~/store'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import profileImg from '~/assets/employee.jpeg'

export default function Profile() {
  const user = useAppStore((state) => state.user)
  const { t } = useTranslation()

  return (
    <Page title={t('User profile')}>
      <Container>
        <Flex flex={1}></Flex>
        <Flex flex={2}></Flex>
      </Container>
    </Page>
  )
}

const Container = styled(Flex)`
  padding: 1rem;

  ${({ theme }) => theme.mq.md} {
    flex-direction: column;
  }
`
