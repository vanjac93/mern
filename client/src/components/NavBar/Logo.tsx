import logo from '@client/assets/logoipsum-330.svg'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/">
      <img alt="Logo" src={logo} />
    </Link>
  )
}
