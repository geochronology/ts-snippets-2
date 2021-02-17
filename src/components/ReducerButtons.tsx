import React, { useReducer } from 'react'

const initialState = { rValue: true }

type State = {
  rValue: boolean
}

type Action = {
  type: "one" | "two"
}

// type Action = { type: "one" } | { type: "two" }

// type Action = // use pipe syntax to get type access to payloads for each type
//   | { type: "one" }
//   | { type: "two" }
//   | { type: "three" }
//   | { type: "four" }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'one':
      return { rValue: true }
    case 'two':
      return { rValue: false }
    default:
      return state
  }
}

export const ReducerButtons = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      {state && state.rValue && <h1>Visible</h1>}
      <button onClick={() => dispatch({ type: "one" })}>Action One</button>
      <button onClick={() => dispatch({ type: "two" })}>Action Two</button>
      {/* <button onClick={() => dispatch({ type: "three" })}>Action Two</button> */}
    </div>
  )
}
