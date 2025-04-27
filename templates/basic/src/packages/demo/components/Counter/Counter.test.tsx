import { fireEvent, render, screen } from '@testing-library/react'

import Counter from './Counter'

describe('Counter', () => {
  test('should increment the counter when the button is clicked', () => {
    render(<Counter />)

    expect(screen.getByText('count is 0')).toBeInTheDocument()

    const button = screen.getByText(/count is \d/)

    fireEvent.click(button)
    expect(screen.getByText('count is 1')).toBeInTheDocument()

    fireEvent.click(button)
    expect(screen.getByText('count is 2')).toBeInTheDocument()

    fireEvent.click(button)
    expect(screen.getByText('count is 3')).toBeInTheDocument()
  })
})
