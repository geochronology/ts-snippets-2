import React, { useState, useRef } from 'react'

export const Input = () => {
  const [name, setName] = useState("")
  const ref = useRef<HTMLInputElement>(null) // read-only (more common)

  // only show value if ref exists and if current exists
  console.log("ref", ref?.current?.value)

  return (
    <input ref={ref} value={name} onChange={e => setName(e.target.value)} />
  )
}
