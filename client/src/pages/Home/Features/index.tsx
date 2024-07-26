import styled from 'styled-components'
import { Box } from '~/components/layout/Box'
import { FeatureType } from './types'
import Feature from './Feature'

interface FeaturesProps {
  features: FeatureType[]
}

export default function Features({ features }: FeaturesProps) {
  return (
    <FeaturesContainer>
      {features.map((f) => (
        <Feature key={f.link.to} feature={f} />
      ))}
    </FeaturesContainer>
  )
}

const FeaturesContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 3rem;
  margin: 3rem 0;
  padding: 1.5rem 4rem;

  ${({ theme }) => theme.mq.xl} {
    grid-template-columns: repeat(2, auto);
    padding: 1.5rem 3rem;
  }

  ${({ theme }) => theme.mq.sm} {
    grid-template-columns: auto;
    gap: 3rem;
    padding: 1.5rem 2rem;
  }
`
