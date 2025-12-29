'use client'
import { useState } from 'react'

type CounterProps = {
  initial: number
}

export default function Counter({ initial }: CounterProps) {
  const [count, setCount] = useState(initial)

  return (
    <div className="flex items-center gap-2">
      <span className="font-medium">{count}</span>
      <button
        className="rounded border px-2"
        onClick={() => setCount(c => c + 1)}
      >
        +
      </button>
      <button
        className="rounded border px-2"
        onClick={() => setCount(c => c - 1)}
      >
        -
      </button>
    </div>
  )
}
