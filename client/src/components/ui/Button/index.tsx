import { Flex } from '@client/components/layout/Box'
import { StyledButton } from './styles'
import { ButtonProps } from './types'
import { Loading } from '../Loading'

export default function Button(props: ButtonProps) {
  const isChildNull = Boolean(
    typeof props.children === 'undefined' || props.children === undefined || props.children === ''
  )

  const Icon = props.icon
  return (
    <StyledButton {...props} hasChildren={!isChildNull}>
      {props.icon && Icon}
      {!isChildNull && props.children}
      {props.loading && (
        <Flex
          position="absolute"
          m={'auto'}
          left={0}
          top={0}
          bottom={0}
          right={0}
          alignItems="center"
          justifyContent="center"
        >
          <Loading small />
        </Flex>
      )}
    </StyledButton>
  )
}
