import styled from 'styled-components'

const StyledInput = styled.input<{ error?: boolean }>`
  background-color: ${({ theme }) => theme.colors.uiBackground};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.uiBackground)};
  width: 100%;
  font-size: 13px;
  padding: 0 12px;
  height: 35px;
  line-height: 1;
  border-radius: 3px;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.4;
    font-size: 14px;
  }
  &:focus-visible {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  opacity: ${({ disabled }) => (disabled ? 0.75 : 1)};

  ${({ theme }) => theme.mq.lg} {
    //this is a hack for mobile devices to not zoom in
    &:focus {
      font-size: 16px;
    }
  }
`

export default StyledInput
