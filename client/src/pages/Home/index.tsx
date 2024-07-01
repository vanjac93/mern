import Page from '~/components/Page'
import { Flex } from '~/components/layout/Box'
import Hero from '~/components/layout/Hero'
import Button from '~/components/ui/Button'
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
          action={<Button text={t('Visit shop')} as={Link} to="/shop" />}
        />
      </Flex>
    </Page>
  )
}
