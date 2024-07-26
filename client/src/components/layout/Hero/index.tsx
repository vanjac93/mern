import { Heading } from '~/components/ui/Heading'
import { Typography } from '../Typography'
import styled, { css } from 'styled-components'
import { Box, Flex } from '../Box'
import { useTranslation } from 'react-i18next'
import Button from '~/components/ui/Button'
import { FaICursor } from 'react-icons/fa6'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <HeroContainer
      p={{
        _: '4rem 2rem'
      }}
    >
      <Heading
        // m={{
        //   _: '4rem 2rem'
        // }}
        fontWeight={100}
        fontSize={{
          xl: '6rem',
          _: '88px'
          // xxl: '6rem'
        }}
      >
        Make <StyledContentSpan>content</StyledContentSpan> your{' '}
        <Typography fontSize="inherit" as="span" fontWeight={800}>
          competitive advantage
        </Typography>
      </Heading>
      <Typography fontWeight={400} fontSize="1.5rem">
        Treat content as data—actionable and scalable across your business—with the Sanity
        Composable Content Cloud.
      </Typography>
      <Flex gap="1rem">
        <Button size="large" text="Start building" />
        <Button size="large" variant="outlined" text="Book a demo" />
      </Flex>
      <Flex alignItems="center" gap="1rem">
        <FaICursor />
        <code>npm install vanja</code>
      </Flex>
    </HeroContainer>
  )
}

const HeroContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-wrap: balance;
  text-align: center;
  min-height: calc(100vh - var(--menu-height) - var(--logos-height) - 4rem);
`

const StyledContentSpan = styled.span`
  color: ${({ theme }) => theme.colors.textUi};
  font-size: inherit;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    inset: -3px;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
