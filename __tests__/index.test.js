import Home from '../app/page'
import '@testing-library/react'
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from '@testing-library/react'

describe('App', () => {
  it('renders the application', () => {
    render(<Home />)

    // expect(screen.getByTestId('main')).toBeInTheDocument()
    // expect(screen.getByTestId('header')).toBeInTheDocument()
    // expect(screen.getByTestId('banner')).toBeInTheDocument()
  })
})
