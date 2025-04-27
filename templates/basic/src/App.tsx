import './App.css'
import { Router } from '@/app/router'
import { Providers } from '@/app/providers/Providers'

export function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  )
}
