import styled from 'styled-components'
import { Flex } from '~/components/layout/Box'
import logoMini from '~/assets/logo-mini.png'
import { Typography } from '~/components/layout/Typography'
import { useTranslation } from 'react-i18next'
import Sitemap from './Sitemap'
import SocialMediaLogos from './SocialMediaLogos'

export default function LandingFooter() {
  const { t } = useTranslation()
  return (
    <StyledFooter>
      <Flex flex={2} flexDirection="column" gap="1rem">
        <img width={24} height={24} src={logoMini} alt="mini logo" />
        <Typography fontSize={16} as="p">
          {t('Proton - privacy by default')}
        </Typography>
        <SocialMediaLogos />
      </Flex>
      <Sitemap />
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  padding: 4rem;
  ${({ theme }) => theme.mq.sm} {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }

  ${({ theme }) => theme.mq.md} {
    gap: 2rem;
  }
`
