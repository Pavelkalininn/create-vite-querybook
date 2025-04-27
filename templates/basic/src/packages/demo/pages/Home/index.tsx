import reactLogo from '@demo/assets/react.svg'
import viteLogo from '@demo/assets/vite.svg'
import { Counter } from '@demo/components'

import './Home.css'

export function Home() {
  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter />
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
