import styled from 'styled-components'
import { CARDS } from './util'
import Card from './Card'

export default function CardsGrid() {
  return (
    <CardsContainer>
      {CARDS.map((card, i) => {
        return <Card key={i} card={card} />
      })}
    </CardsContainer>
  )
}

const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 25%);

  ${({ theme }) => theme.mq.md} {
    grid-template-columns: repeat(2, 50%);
  }

  ${({ theme }) => theme.mq.xs} {
    display: block;
  }
`
