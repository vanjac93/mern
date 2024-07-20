import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Flex } from '~/components/layout/Box'
import glassImg from '~/assets/test-png.png'
import tinycolor from 'tinycolor2'
import { Heading } from '~/components/ui/Heading'
import { Divider } from '~/components/layout/Divider'
// import huffPost from '~/assets/huffpost.svg'
import wsj from '~/assets/WSJ_Logo.svg'
import { Typography } from '~/components/layout/Typography'

export default function DiscoverSection() {
  const { t } = useTranslation()

  return (
    <StyledSection>
      <StyledImg
        src={glassImg}
        // src="https://dummyimage.com/600x600/#f2f2f2/aaa"
        alt="dummys"
      />
      <Heading fontSize="3rem" color="textUi" as="h1">
        {t(
          'Discover why millions of business owners trust Alignable as their business networking platform.'
        )}
      </Heading>
      <Cards />

      <StyledDivider $color="#fff" />
      <Logos />
    </StyledSection>
  )
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <Flex
      pl="2rem"
      color="textUi"
      flexDirection="column"
      borderLeft="2px solid"
      style={{ textWrap: 'nowrap' }}
      borderColor="textUi"
      height={80}
    >
      <Typography fontWeight={900} fontSize="2rem">
        {title}
      </Typography>
      <Typography fontWeight={600}>{text}</Typography>
    </Flex>
  )
}

function Cards() {
  const { t } = useTranslation()
  return (
    <CardsContainer>
      <Card title={'100%'} text={t('built for entrepreneurs')} />
      <Card title={'25%'} text={t('of total US business owners')} />
      <Card title={'9 Million'} text={t('members in North America')} />
      <Card title={'140 Million'} text={t('relationships formed')} />
    </CardsContainer>
  )
}

function Logos() {
  return (
    <LogosContainer gap="1rem">
      <StyledLogo src={wsj} alt="HuffPost logo" />
      <StyledLogo src={wsj} alt="HuffPost logo" />
      <StyledLogo src={wsj} alt="HuffPost logo" />
      {/* <StyledLogo src={wsj} alt="HuffPost logo" /> */}
    </LogosContainer>
  )
}

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'image heading'
    'image cards'
    'divider divider'
    'logos logos';
  background-color: ${({ theme }) => tinycolor(theme.colors.primary).darken().toHexString()};
  flex-direction: column;
  height: 800px;
  column-gap: 1rem;
  row-gap: 2rem;
  padding: 4rem;

  ${({ theme }) => theme.mq.lg} {
    grid-template-columns: 1fr;
    height: unset;
    grid-template-areas:
      'heading heading'
      'image image'
      'cards cards'
      'divider divider'
      'logos logs';
  }
`

const StyledDivider = styled(Divider)`
  grid-area: divider;
`

const CardsContainer = styled(Flex)`
  grid-area: cards;
  display: grid;

  grid-template-columns: repeat(2, 300px);

  gap: 1rem;

  ${({ theme }) => theme.mq.lg} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${({ theme }) => theme.mq.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.mq.sm} {
    grid-template-columns: 1fr;
  }
`

const LogosContainer = styled(Flex)`
  grid-area: logos;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  opacity: 0.8;
`

const StyledLogo = styled.img`
  width: 200px;
  height: 30px;
`

const StyledImg = styled.img`
  grid-area: image;
  height: auto;
  /* width: 600px; */
  object-fit: contain;

  /* ${({ theme }) => theme.mq.lg} {
    width: 100%;
  } */
`
