import { Provider } from 'react-redux'
import { store } from '../store'
import { BrowserRouter } from "react-router-dom"

export type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter></Provider>
}
