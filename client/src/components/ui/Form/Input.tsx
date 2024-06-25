import styled from 'styled-components'
import tinycolor from 'tinycolor2'

const StyledInput = styled.input<{ error?: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.error : tinycolor(theme.colors.primary).lighten(30).toHexString()};
  width: 100%;
  font-size: 14px;
  padding: 0 12px;
  height: 35px;
  line-height: 1;
  border-radius: 3px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.4;
    font-size: 13px;
  }

  &:focus-visible {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  opacity: ${({ disabled }) => (disabled ? 0.75 : 1)};

  ${({ theme }) => theme.mq.lg} {
    //this is a hack for mobile devices to not zoom in
    &:focus {
      /* font-size: 16px; */
    }
  }
`

export default StyledInput
