import { HTMLAttributes, forwardRef } from 'react'

import { StyledButton } from './styles'
import { ButtonProps } from './types'
import { Typography } from '@client/components/layout/Typography'
import { Box, Flex } from '@client/components/layout/Box'
import { Loading } from '../Loading'

const Button = forwardRef<HTMLButtonElement, ButtonProps & HTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { icon, variant = 'default', text, size = 'default', loading, disabled, ...other } = props

    return (
      <StyledButton
        ref={ref}
        type="button"
        variant={variant}
        {...other}
        loading={loading}
        icon={icon}
        text={text}
        disabled={disabled}
      >
        {icon}
        <Flex gap={8} alignItems="center">
          {loading && <Loading small={size === 'small'} />}
          {text && (
            <Typography as={'span'} lineHeight="1" fontSize={'inherit'}>
              {text}
            </Typography>
          )}
        </Flex>
      </StyledButton>
    )
  }
)

export default Button
