import Page from '@client/components/Page'
import { Flex } from '@client/components/layout/Box'
import Hero from '@client/components/layout/Hero'
import Button from '@client/components/ui/Button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Home() {
  const { t } = useTranslation()

  return (
    <Page title={t('Welcome!')}>
      <Flex justifyContent="center" p="4rem">
        <Hero
          title={t('Turn Emails into Revenue')}
          text={t(
            'Win new customers with the #1 email marketing and automations platform* that recommends ways to get more opens, clicks, and sales.'
          )}
          action={
            <Button as={Link} to="/shop">
              Visit shop
            </Button>
          }
        />
      </Flex>
    </Page>
  )
}
