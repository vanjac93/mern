import { Box, Flex } from '~/components/layout/Box'
import { MultistepFormProps, StepType } from './types'
import { useState } from 'react'
import Button from '../../Button'
import styled, { css } from 'styled-components'
import { FaLock } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { hexToRGB } from '~/utils/style'
import Form from '../Form'

export default function MultistepForm(props: MultistepFormProps) {
  const { steps, methods, onSubmit } = props
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useTranslation()

  return (
    // @ts-ignore
    <Form onSubmit={methods.handleSubmit(onSubmit)}>
      <Header steps={steps} activeIndex={activeIndex} />
      {steps.map((step, i) => {
        return <Box display={activeIndex === i ? 'block' : 'none'}>{step.content}</Box>
      })}

      <Flex justifyContent="end" mt={4} gap="8px">
        {activeIndex > 0 && (
          <Button
            variant="outlined"
            text={t('Back')}
            onClick={() => setActiveIndex(activeIndex - 1)}
          />
        )}
        {activeIndex < steps.length - 1 ? (
          <Button
            text={t('Next')}
            onClick={() => {
              setActiveIndex(activeIndex + 1)
            }}
          />
        ) : (
          <Button text={t('Done')} type="submit" />
        )}
      </Flex>
    </Form>
  )
}

interface HeaderProps {
  steps: StepType[]
  activeIndex: number
}

function Header({ steps, activeIndex }: HeaderProps) {
  return (
    <Flex alignItems="center" mb={4} justifyContent="space-evenly">
      {steps.map((step, i) => {
        return (
          <Flex
            key={step.id}
            position="relative"
            justifyContent="center"
            flex={1}
            gap={8}
            alignItems={'center'}
          >
            <TestFlex
              flexDirection="column"
              zIndex={10}
              gap={8}
              justifyContent="center"
              alignItems="center"
              $done={i <= activeIndex}
            >
              <Button rounded style={{ zIndex: 10 }} icon={<FaLock />} />
              <span style={{ position: 'absolute', bottom: '-30px' }}>{step.label}</span>
            </TestFlex>
          </Flex>
        )
      })}
    </Flex>
  )
}

const TestFlex = styled(Flex)<{ $done: boolean }>`
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    ${({
      theme: {
        colors: { primary }
      }
    }) => {
      return css`
        background: linear-gradient(to right, ${primary} 50%, ${hexToRGB(primary, 0.2)} 50%);
      `
    }}
    background-size: 200% 100%;
    background-position: right bottom;
    ${({ $done }) =>
      $done &&
      css`
        background-position: left bottom;
      `}
    transition: all  0.3s ease-out;
  }
`
