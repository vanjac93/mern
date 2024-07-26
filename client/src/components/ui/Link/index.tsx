import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '~/components/layout/Box'

interface UnderlinedLinkType {
  to: string
  text: string
}

interface UnderlindeLinkProps {
  link: UnderlinedLinkType
}

export function UnderlinedLink({ link }: UnderlindeLinkProps) {
  const { to, text } = link
  return (
    <Link to={to}>
      <Flex color="primary" gap="0.5rem" alignItems="center">
        <StyledSpan>{text}</StyledSpan>
        <IoIosArrowForward />
      </Flex>
    </Link>
  )
}

const StyledSpan = styled.span<{ basic?: true }>`
  font-size: 18px;
  font-weight: 600;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    display: block;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`
