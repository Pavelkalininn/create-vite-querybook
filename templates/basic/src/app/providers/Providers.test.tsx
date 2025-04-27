import { render, screen } from '@testing-library/react'

import { Providers, type ProvidersProps } from './Providers'

const defaultProps: ProvidersProps = {
  children: <div data-testid='mock-component'>Test Child</div>,
}

const renderComponent = (props: ProvidersProps = defaultProps) => {
  return render(<Providers {...defaultProps} {...props} />)
}

describe('Providers', () => {
  test('should render the child component when provided', () => {
    renderComponent()

    const mockComponent = screen.getByTestId('mock-component')
    expect(mockComponent).toBeInTheDocument()
  })

  test('should render without crashing when no child component is provided', () => {
    renderComponent({ children: null })

    const mockComponent = screen.queryByTestId('mock-component')
    expect(mockComponent).not.toBeInTheDocument()
  })
})
