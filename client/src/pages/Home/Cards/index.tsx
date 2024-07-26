import styled from 'styled-components'
import Card from './Card'
import { CardType } from './types'

export default function Cards({ cards }: { cards: CardType[] }) {
  return (
    <CardsContainer>
      {cards.map((card, i) => {
        return <Card key={i} card={card} />
      })}
    </CardsContainer>
  )
}

const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin: 4rem 0;
`
