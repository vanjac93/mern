import NavBar from '@client/components/NavBar'
import { Typography } from '@client/components/layout/Typography'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Typography fontSize="2rem">Welcome</Typography>
    </div>
  )
}
