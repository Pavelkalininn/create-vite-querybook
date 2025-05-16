import '../src/index.css'
import '../src/App.css'

import { store } from "@/app/store"
import { Provider } from 'react-redux'
import { handlers } from './handlers.js'
import { setupWorker } from 'msw/browser'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import type { FC } from "react"

const worker = setupWorker(...handlers)
await worker.start()

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    loaders: [
      () => {
        window.localStorage.setItem('projectCode', 'PRES')
      },
    ],
  },
  decorators: [
    (Story: FC) => (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Story />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    ),
  ],
  tags: ['autodocs'],
}

export default preview
