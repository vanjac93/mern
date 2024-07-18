import { Flex } from '~/components/layout/Box'
import { CardType } from './types'
import styled from 'styled-components'
import { Typography } from '~/components/layout/Typography'
import Button from '~/components/ui/Button'

export default function Card({ card }: { card: CardType }) {
  const { title, text, src, srcSet, link } = card

  return (
    <Flex flexDirection="column">
      <Flex position="relative" flexDirection="column" p="2rem">
        <Typography color="textUi" style={{ zIndex: 1 }} mb="1.5rem" fontSize={26}>
          {title}
        </Typography>
        <StyledImg
          alt="Test"
          src={src}
          srcSet={srcSet}
          sizes="(max-width: 576px) 100vw, (max-width: 992px): 50vw, (min-width: 993px) 25vw"
        />
      </Flex>
      <Flex p="2rem" flexDirection="column">
        <Typography mb="2rem">{text}</Typography>
        <Button variant="outlined" text="Test" />
      </Flex>
    </Flex>
  )
}

const StyledImg = styled.img`
  position: absolute;
  inset: 0;
`

const StyledPic = styled.picture`
  img {
    width: 100%;
    height: auto;
  }
`
const CardContainer = styled.figure`
  .card-title {
    position: absolute;
    top: 10%;
    left: 10%;
  }

  .card-meta {
    padding: 10%;
  }
`
