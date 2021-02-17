import React from 'react'

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void, // mouse event on a button
}

export const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}
