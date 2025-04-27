import { screen, waitFor } from '@testing-library/react'
import { App } from './App'
import { renderWithProviders } from './utils/test-utils'

test('App without await should render ...Loading', () => {
  renderWithProviders(<App />)
  expect(screen.getByText("...Loading")).toBeInTheDocument()
})

test('App should have correct initial render', async () => {
  renderWithProviders(<App />)
  await waitFor(() => {
      const countLabel = screen.getByLabelText<HTMLLabelElement>('Text')

      const incrementValueInput = screen.getByLabelText<HTMLInputElement>(
        'Set increment amount',
      )
      expect(screen.getByText("Vite + React")).toBeInTheDocument()
      expect(countLabel).toHaveTextContent('to test HMR')
      expect(incrementValueInput).toHaveValue(2)
  })
})
