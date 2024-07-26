import { Box, Flex } from '~/components/layout/Box'
import { CardType } from './types'
import { Typography } from '~/components/layout/Typography'
import styled from 'styled-components'

export default function Card({ card }: { card: CardType }) {
  const { title, text, imgSrc, action } = card

  return (
    <Flex className="CARD" flexDirection={['column', 'column', 'column', 'row']}>
      <img alt="Test" src={imgSrc} />
      <Flex alignItems="baseline" m="0 2rem" flexDirection="column">
        <TitleContainer>{title}</TitleContainer>
        <Typography my={'1rem'} fontSize={18} lineHeight={1.8}>
          {text}
        </Typography>
        {action}
      </Flex>
    </Flex>
  )
}

const TitleContainer = styled.div`
  margin: 0;

  ${({ theme }) => theme.mq.md} {
    margin: 2rem 0;
  }
`
