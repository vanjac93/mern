import styled from 'styled-components'
import { Box, Flex } from '~/components/layout/Box'
import { Typography } from '~/components/layout/Typography'

export default function HeroSecondary() {
  return (
    <Container
      m={{
        _: '3rem 3rem'
      }}
      p={{
        _: '10rem 2rem'
      }}
    >
      <Typography as="h3" fontSize="4rem" fontWeight={400}>
        A headless CMS and{' '}
        <Typography fontSize="inherit" as="span" fontWeight={800}>
          much more
        </Typography>
      </Typography>
      <Box>
        <Typography as="p" fontSize="2rem">
          Sanity delivers content anywhere (just like a headless CMS).
        </Typography>
        <Typography as="p" fontSize="2rem">
          Beyond that, Sanity gives you total composability. A fully decoupled, real-time content
          back end. Entirely customizable content workspaces. Be ready for what's next.
        </Typography>
      </Box>
    </Container>
  )
}

const Container = styled(Flex)`
  text-align: center;
  text-balance: balanced;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
`
