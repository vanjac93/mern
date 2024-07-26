import styled from 'styled-components'
import { Box, Flex } from '~/components/layout/Box'
import { Typography } from '~/components/layout/Typography'
import { UnderlinedLink } from '~/components/ui/Link'

interface StoryCardProps {
  story: StoryCardType
}

interface StoryCardType {
  title: string
  text: string
  img: string
  link: {
    text: string
    to: string
  }
}

export default function StoryCard({ story }: StoryCardProps) {
  const { title, text, img, link } = story
  return (
    <CardContainer>
      <StyledImg src={img} alt="dummy" />
      <TextCardContainer>
        <Typography as="h4" fontSize={28}>
          {title}
        </Typography>
        <Typography as="p" fontSize={18}>
          {text}
        </Typography>
        <UnderlinedLink link={link} />
      </TextCardContainer>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-template-rows: 4em auto auto;
  gap: 3rem;
  ${({ theme }) => theme.mq.md} {
    grid-template-columns: repeat(8, minmax(0, 1fr));
    gap: 1rem;
  }
`

const StyledImg = styled.img`
  display: inline-block;
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: -1;
  border-radius: 2rem;

  ${({ theme }) => theme.mq.md} {
    grid-column: 2 / span 7;
    grid-row: 1 / -1;
    height: 30rem;
    width: 100%;
  }
`

const TextCardContainer = styled(Flex)`
  flex-direction: column;
  z-index: 10;
  padding: 2rem;
  gap: 2rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.textUi};
  grid-row-start: 2;
  grid-row-end: -1;
  grid-column-start: 1;
  grid-column-end: 5;

  ${({ theme }) => theme.mq.md} {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`
