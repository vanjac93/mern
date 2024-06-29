import Page from '@client/components/Page'
import { Flex } from '@client/components/layout/Box'
import Hero from '@client/components/layout/Hero'
import Button from '@client/components/ui/Button'
import API from '@client/services/apiV2/api'
// import { get } from '@client/services/api/api'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Home() {
  const { t } = useTranslation()

  useEffect(() => {
    async function fetchPosts() {
      const data = await API.get('/posts')
      console.log('posts', data)
    }

    fetchPosts()
  }, [])

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
