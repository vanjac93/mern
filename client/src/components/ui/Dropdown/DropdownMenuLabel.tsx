import { Typography } from '@client/components/layout/Typography'

type Props = {
  text: string
}

const DropdownMenuLabel = (props: Props) => {
  return (
    <Typography px="8px" py="4px" fontSize="12px" color="border" style={{ userSelect: 'none' }}>
      {props.text}
    </Typography>
  )
}

export default DropdownMenuLabel
