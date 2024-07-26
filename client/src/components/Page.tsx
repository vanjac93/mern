import { PropsWithChildren, useEffect } from 'react'
import NavBar from './NavBar'

interface PageProps {
  title: string
}

export default function Page(props: PropsWithChildren<PageProps>) {
  const { title, children } = props

  useEffect(() => {
    document.title = title || 'MERN Example'
  }, [title])

  return (
    <>
      <NavBar />
      <main style={{ marginTop: 80 }}>{children}</main>
    </>
  )
}
