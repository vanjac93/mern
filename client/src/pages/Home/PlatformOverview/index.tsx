import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Section from '~/components/layout/Box/Section'
import { Typography } from '~/components/layout/Typography'
import ShowcaseAnimation from './ShowcaseAnimation'

export default function PlatformOverview() {
  const { t } = useTranslation()
  return (
    <Container
      p={{
        _: '5rem 2rem'
      }}
    >
      <Typography color="primary" fontSize={22}>
        {t('Platform overview')}
      </Typography>
      <Typography fontSize="3rem" mb="3rem">
        {t('Sanity Composable Content Cloud')}
      </Typography>
      <ShowcaseAnimation />
    </Container>
  )
}

const Container = styled(Section)`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  text-align: center;
  text-wrap: balance;
  background-color: black;
  color: white;
`
