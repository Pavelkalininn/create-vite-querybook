import { fireEvent, render, screen } from '@testing-library/react'

import Button, { type ButtonProps } from './Button'
import { vi } from 'vitest'

describe('Button', () => {
  const defaultProps: ButtonProps = {
    label: 'Click me',
  }

  test('should render button with label', () => {
    render(<Button {...defaultProps} />)

    const buttonElement = screen.getByText(/click me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test('should apply correct size class for small', () => {
    render(<Button {...defaultProps} size='small' />)

    const buttonElement = screen.getByText(/click me/i)
    expect(buttonElement).toHaveClass('button--small')
  })

  test('should apply correct size class for medium', () => {
    render(<Button {...defaultProps} size='medium' />)

    const buttonElement = screen.getByText(/click me/i)
    expect(buttonElement).toHaveClass('button--medium')
  })

  test('should apply correct size class for large', () => {
    render(<Button {...defaultProps} size='large' />)

    const buttonElement = screen.getByText(/click me/i)
    expect(buttonElement).toHaveClass('button--large')
  })

  test('should call onClick handler when clicked', () => {
    const onClickMock = vi.fn()
    render(<Button {...defaultProps} onClick={onClickMock} />)

    const buttonElement = screen.getByText(/click me/i)
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
