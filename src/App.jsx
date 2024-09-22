import React from "react"
import State from "./hooks/state"
import StateTwo from "./hooks/StateTwo"
import StateThree from "./hooks/StateThree"
import Effect from "./hooks/Effect"

const App = () => {
  return (
    <div>
      <State />
      <StateTwo />
      <StateThree />
      <Effect />
    </div>
  )
}

export default App
