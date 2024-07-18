import Page from '~/components/Page'
import { Flex } from '~/components/layout/Box'
import Hero from '~/components/layout/Hero'
import Button from '~/components/ui/Button'
import { useTranslation } from 'react-i18next'
import dummyImg from '~/assets/images/cards/img1.jpg'
import DiscoverSection from './DiscoverSection'

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
          img={dummyImg}
          action={<Button size="large" text={t('Visit shop')} />}
        />
      </Flex>
      {/* <CardsGrid /> */}
      <DiscoverSection />
    </Page>
  )
}
