import { Typography } from '~/components/layout/Typography'
import { CardContainer, StyledBtn } from './index.styled'
import { ShowcaseCardProps } from './types'

export default function ShowcaseCard({
  text,
  gridArea,
  row,
  column,
  title,
  onMouseEnter,
  onClick,
  id
}: ShowcaseCardProps) {
  return (
    <CardContainer
      onMouseEnter={() => onMouseEnter(id)}
      row={row}
      gridArea={gridArea}
      column={column}
      onClick={() => onClick(id)}
    >
      <StyledBtn className="btn">{title}</StyledBtn>
      <Typography>{text}</Typography>
    </CardContainer>
  )
}
