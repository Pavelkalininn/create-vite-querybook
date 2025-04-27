import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, expect, vi } from 'vitest'

expect.extend(matchers)

afterEach(() => {
  cleanup()

  vi.clearAllMocks()
})
