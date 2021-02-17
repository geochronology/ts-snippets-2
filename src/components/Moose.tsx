import React from 'react'

export const Moose = () => {
  return (
    <div>

    </div>
  )
}

type User = {
  name: string
}

type TypicalProps = {
  title: string, // Required
  isActive?: boolean, // Optional
  thing: number,
  thing2: string[], // array of strings
  status: "loading" | "loaded", // union type
  thing3: {},
  thing4: {
    name: string,
  },
  func: () => void,
  user: User,

  // FUNCTIONS
  // onClick(): string, // method returns string
  // onClick(): void, // method returns nothing
  // onClick(text: string): void, // method with params
  // onClick: () => void // function returns nothing
  // onClick: (text: string) => void // function with params

  // REACT EVENTS
  // onClick: (e: React.MouseEvent) => void // basic mouse event
  // onChange?: (e: React.FormEvent<HTMLInputElement>) => void // basic input event
  // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void // mouse event on a button
}


// PROPS.CHILDREN
// export const Button: React.FC<Props> = ({ onClick, children }) => {
//   return (
//     <button onClick={onClick}>{children}</button>
//   )
// }


// USESTATE
// const [name, setName] = useState<string | null>(null)
// pretty much equivalent to...
// const [name, setName] = useState("")
// TS will infer type based on default value


// USEREF (BASIC)
// export const Input = () => {
//   const [name, setName] = useState("")
//   // const ref = useRef<HTMLInputElement | null>(null) // read or write
//   const ref = useRef<HTMLInputElement>(null!) // read-only (more common)
//
//   if (ref && ref.current) {
//     console.log("ref", ref.current.value)
//   }
//
//   return (
//     <input ref={ref} value={name} onChange={e => setName(e.target.value)} />
//   )
// }


// OPTIONAL CHAINING
// export const Input = () => {
//   const [name, setName] = useState("")
//   const ref = useRef<HTMLInputElement>(null) // read-only (more common)
//
//   // only show value if ref exists and if current exists
//   console.log("ref", ref?.current?.value)
//
//   return (
//     <input ref={ref} value={name} onChange={e => setName(e.target.value)} />
//   )
// }


// GENERICS
// a thing that contains a thing
// command click on a thing to get its type definition

type MooseProps = {
  title: string,
  isActive?: boolean,
  bob: string[],
  genericBob: Array<string> // same as bob
}


