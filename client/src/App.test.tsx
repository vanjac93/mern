import { render, screen } from '@testing-library/react'
import Home from './pages/Home'
import TestWrapper from './tests/testUtil'

describe('<App />', () => {
  it('App renders', () => {
    render(<Home />, { wrapper: TestWrapper })

    expect(screen.getByText('Turn Emails intos Revenue')).toBeInTheDocument()
  })
})
