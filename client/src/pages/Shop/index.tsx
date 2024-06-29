import Page from '@client/components/Page'
import { useTranslation } from 'react-i18next'

export default function Shop() {
  const { t } = useTranslation()

  return <Page title={t('Shop')}></Page>
}
