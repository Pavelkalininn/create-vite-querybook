import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Router } from './index'
import { vi } from 'vitest'
import type { ComponentType } from "react"

vi.mock('@demo/pages', async () => {
  const actual = await vi.importActual<{ Home: ComponentType }>('@demo/pages')

  return {
    ...actual,
    Home: () => <div data-testid='mock-home-page' />,
  }
})

const renderComponent = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Router />
    </MemoryRouter>,
  )
}

describe('Router', () => {
  test('should render the Home component when navigating to the root path with 1 second waiting', () => {
    renderComponent()
    setTimeout(() => {
        const mockHomePage = screen.getByTestId('mock-home-page')
        expect(mockHomePage).toBeInTheDocument()
      },
      1000
    )
  });
})
