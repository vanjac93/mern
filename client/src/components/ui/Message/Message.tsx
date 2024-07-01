import { Box, Flex } from '~/components/layout/Box'
import { MessageProps, MessageType } from './types'
import { Heading } from '../Heading'
import { Typography } from '~/components/layout/Typography'
import styled from 'styled-components'
import { FaExclamationTriangle } from 'react-icons/fa'
import { FaInfoCircle } from 'react-icons/fa'
import { FaCheckCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { PropsWithChildren } from 'react'

export default function Message(props: PropsWithChildren<MessageProps>) {
  const { title, message, children, type = 'info' } = props
  return (
    <MessageContainer $type={type}>
      <Flex alignItems="center" gap={16} mb={2}>
        {title && (
          <IconContext.Provider value={{ size: '20px' }}>{getIcon(type)}</IconContext.Provider>
        )}
        {title && <Heading>{title}</Heading>}
      </Flex>
      <Typography>
        {typeof message === 'string' ? (
          <p>{message}</p>
        ) : (
          message.map((message, i) => <p key={i}>{message}</p>)
        )}
      </Typography>
      {children}
    </MessageContainer>
  )
}

const MessageContainer = styled(Box)<{ $type: MessageType }>`
  width: 100%;
  padding: 1rem;
  border-radius: 4px;

  border: 1px solid;
  border-color: ${({ $type, theme: { colors } }) => {
    if ($type === 'error') {
      return colors.errorSecondary
    }
    if ($type === 'info') {
      return colors.primary
    }
    if ($type === 'success') {
      return colors.success
    }
  }};

  color: ${({ theme }) => theme.colors.textUi};

  background-color: ${({ $type, theme: { colors } }) => {
    switch ($type) {
      case 'error':
        return colors.errorSecondary
      case 'info':
        return colors.primary
      case 'success':
        return colors.success
    }
  }};
`

function getIcon(type: MessageType) {
  switch (type) {
    case 'error':
      return <FaExclamationTriangle />
    case 'info':
      return <FaInfoCircle />
    case 'success':
      return <FaCheckCircle />
  }
}

function getColor(type: MessageType) {
  switch (type) {
    case 'error':
      return 'error'
    case 'info':
      return 'primary'
    case 'success':
      return 'success'
  }
}
