import { ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'
import { Flex } from '~/components/layout/Box'
import { Typography } from '~/components/layout/Typography'
import { FaPlus, FaMinus } from 'react-icons/fa6'

interface QaItemProps {
  question: string
  answer: ReactNode
}

export default function QAItem({ question, answer }: QaItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <CardContainer open={open} onClick={() => setOpen((prev) => !prev)}>
      <Flex justifyContent="space-between" alignItems="center">
        <Typography
          fontSize={{
            sm: 22,
            _: 22
          }}
          as="h4"
        >
          {question}
        </Typography>
        <IconContainer className="icon-container">
          {open ? <FaMinus size={16} /> : <FaPlus size={16} />}
        </IconContainer>
      </Flex>
      {open && (
        <Typography mt="2rem" as="p">
          {answer}
        </Typography>
      )}
    </CardContainer>
  )
}

const IconContainer = styled(Flex)`
  justify-content: space-around;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bgAlt};
`

const CardContainer = styled(Flex)<{ open: boolean }>`
  font-size: 22px;
  cursor: pointer;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.textUi};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);
  border: 2px solid;
  border-color: ${({ theme, open }) => (open ? theme.colors.primary : theme.colors.bgAlt)};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};

    .icon-container {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.textUi};
    }
  }
`
