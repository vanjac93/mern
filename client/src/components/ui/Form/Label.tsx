import styled, { css } from 'styled-components'
import { ColorProps, SpaceProps, color, space } from 'styled-system'

const Label = styled.label<ColorProps & SpaceProps & { required?: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  box-shadow: none;
  font-weight: 400;
  border-radius: 3px;
  border: none;
  display: block;
  margin-bottom: 4px;
  line-height: 1.2;
  font-size: 13px;
  ${({ required }) =>
    required &&
    css`
      &:after {
        content: '*';
        position: relative;
        left: 2px;
      }
    `};
  ${color}
  ${space}
`

export default Label
