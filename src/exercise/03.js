// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

const ToggleContext = React.createContext()

function Toggle({onToggle, children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  const value = {on, toggle}

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  )
}

const useToggle = () => {
  const ctx = React.useContext(ToggleContext)
  if (!ctx) {
    throw new Error('useToggle must be used in a <Toggle /> component')
  }
  return ctx
}

function ToggleOn({children}) {
  const {on} = useToggle()
  return on ? children : null
}

// 🐨 do the same thing to this that you did to the ToggleOn component
function ToggleOff({children}) {
  const {on} = useToggle()
  return on ? null : children
}

function ToggleButton(props) {
  const {on, toggle} = useToggle()
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return <ToggleButton />
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
