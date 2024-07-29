import Page from '~/components/Page'
import { useTranslation } from 'react-i18next'

import Logos from './Logos'
import HeroSecondary from './HeroSecondary'
import PlatformOverview from './PlatformOverview'
import Hero from './Hero'

export default function Home() {
  const { t } = useTranslation()

  return (
    <Page title={t('Welcome!')}>
      <Hero />
      <Logos />
      <HeroSecondary />
      <PlatformOverview />
    </Page>
  )
}
