import { Heading } from '~/components/ui/Heading'
import { ReactNode } from 'react'
import { Typography } from '../Typography'
import styled from 'styled-components'
import { Flex } from '../Box'

interface HeroProps {
  title: string
  text: string
  action: ReactNode
}

export default function Hero({ title, text, action }: HeroProps) {
  return (
    <HeroContainer>
      <Heading fontWeight={400} textAlign="center" mb="1rem" fontSize="2rem">
        {title}
      </Heading>
      <Typography mb="2.5rem" fontWeight={400} fontSize="1.5rem" textAlign="center">
        {text}
      </Typography>
      {action}
    </HeroContainer>
  )
}

const HeroContainer = styled(Flex)`
  max-width: 80%;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mq.md} {
    max-width: 60%;
  }

  ${({ theme }) => theme.mq.sm} {
    max-width: 85%;
  }
`
