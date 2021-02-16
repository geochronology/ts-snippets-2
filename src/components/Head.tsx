import React from 'react'

type Props = {
  title: string,
  isActive: boolean
}

export const Head = ({ title, isActive }: Props) => {
  return (
    <div>
      <h1>Hello</h1>

      {isActive && <h3>Active</h3>}

    </div>
  )
}
