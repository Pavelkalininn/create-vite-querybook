import { useState } from 'react'

import { Button } from '@demo/components'

import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(2)

  return (
    <div className='card'>
      <Button
        onClick={() => {
          setCount((count) => count + 1)
        }}
        label={`count is ${String(count)}`}
      />
        <input
          aria-label="Set increment amount"
          value={String(count)}
          type="number"
          onChange={e => {
            setCount(+e.target.value)
          }}
        />

      <label  aria-label="Text">
      <p>
        Edit <code>src/packages/demo/components/Counter/Counter.tsx</code> and save
        to test HMR
      </p>
      </label>
    </div>
  )
}

export default Counter
