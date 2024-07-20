import { Heading } from '~/components/ui/Heading'
import { ReactNode } from 'react'
import { Typography } from '../Typography'
import styled from 'styled-components'
import { Box, Flex } from '../Box'
import orange from '~/assets/images/orange.jpg'
import orange576 from '~/assets/images/orange-576.jpg'
import orange768 from '~/assets/images/orange-768.jpg'
import orange1200 from '~/assets/images/orange-1200.jpg'
import orange1970 from '~/assets/images/orange-1970.jpg'
import waveImg from '~/assets/bird-transparent.png'

interface HeroProps {
  title: string
  text: string
  img: string
  action: ReactNode
}

const getImageUrl = (path: string) => {
  return new URL(`../assets/images/${path}`, import.meta.url).href
}

export default function Hero({ title, text, action, img }: HeroProps) {
  return (
    <HeroContainer maxHeight={['unset', 'unset', 'null', '80vw', '80vw', '80vw']}>
      <Flex flexDirection="column" flex={1} alignItems="center">
        <Heading
          fontWeight={600}
          textAlign="center"
          mb={['2rem', '2rem', '2rem', '1rem']}
          fontSize={['3rem', '4rem']}
        >
          {title}
        </Heading>
        <Typography mb="2.5rem" fontWeight={400} fontSize="1.5rem" textAlign="center">
          {text}
        </Typography>
        {action}
      </Flex>
      <Box flex={1}>
        <img
          style={{ borderRadius: '10px' }}
          src={waveImg}
          // srcSet="/src/assets/images/orange-576.jpg 576w,
          // /src/assets/images/orange-768.jpg 768w,
          //  /src/assets/images/orange-1200.jpg 1200w,
          //  /src/assets/images/orange-1970.jpg 1970w,
          //  /src/assets/images/orange.jpg
          // "
          onLoad={(e) => {
            console.log('loaded', e)
          }}
          alt="Hero"
        />
      </Box>
    </HeroContainer>
  )
}

const HeroContainer = styled(Flex)`
  width: 100%;
  align-items: center;
  gap: 3rem;
  ${({ theme }) => theme.mq.md} {
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.sm} {
    max-width: 85%;
  }
`
