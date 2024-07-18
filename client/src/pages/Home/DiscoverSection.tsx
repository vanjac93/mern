import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Flex } from '~/components/layout/Box'
import glassImg from '~/assets/file.png'
import tinycolor from 'tinycolor2'
import { Heading } from '~/components/ui/Heading'
import { Divider } from '~/components/layout/Divider'
import huffPost from '~/assets/huffpost.svg'
import wsj from '~/assets/WSJ_Logo.svg'
import { Typography } from '~/components/layout/Typography'

export default function DiscoverSection() {
  const { t } = useTranslation()
  return (
    <StyledSection>
      <StyledContainer>
        <Flex flex={1}>
          <img src={glassImg} alt="dummys" />
        </Flex>
        <Flex flex={1} flexDirection="column">
          <Heading fontSize="3rem" color="textUi" mb="3rem" as="h1">
            {t(
              'Discover why millions of business owners trust Alignable as their business networking platform.'
            )}
          </Heading>
        </Flex>
      </StyledContainer>
      <TestCards />
      <Divider $color="#fff" />
      <TestLogos />
    </StyledSection>
  )
}

function TestCard({ title, text }: { title: string; text: string }) {
  return (
    <Flex
      pl="2rem"
      color="textUi"
      flexDirection="column"
      borderLeft="3px solid"
      borderColor="textUi"
    >
      <Typography fontWeight={600} fontSize="2rem" mb="1rem">
        {title}
      </Typography>
      <Typography>{text}</Typography>
    </Flex>
  )
}

function TestCards() {
  const { t } = useTranslation()
  return (
    <Flex gap="3rem">
      <TestCard title={'100%'} text={t('built for entrepreneurs')} />
      <TestCard title={'25%'} text={t('of total US business owners')} />
      <TestCard title={'9 Million'} text={t('members in North America')} />
      <TestCard title={'140 Million'} text={t('relationships formed')} />
    </Flex>
  )
}

function TestLogos() {
  return (
    <Flex gap="1rem">
      {/* <img src={huffPost} alt="HuffPost logo" /> */}
      <img src={wsj} alt="HuffPost logo" />
      <img src={wsj} alt="HuffPost logo" />
      <img src={wsj} alt="HuffPost logo" />
      <img src={wsj} alt="HuffPost logo" />
    </Flex>
  )
}

const StyledSection = styled.section`
  display: grid;

  flex-direction: column;
  background-color: ${({ theme }) => tinycolor(theme.colors.primary).darken().toHexString()};
  gap: 1rem;
`

const StyledContainer = styled(Flex)`
  padding: 6rem;
  gap: 2rem;
  ${({ theme }) => theme.mq.md} {
    flex-direction: column;
  }
`
