import { render, screen } from '@testing-library/react'

import { Home } from './index'

describe('Home', () => {
  test('should render the Home component without error', () => {
    render(<Home />)

    expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
    expect(screen.getByAltText('React logo')).toBeInTheDocument()
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })
})
