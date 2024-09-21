import React, { useState } from "react"

const State = () => {
  const [color, setColor] = useState("red")

  const chnageColor = () => {
    setColor("blue")
  }
  return (
    <div>
      <h1>my button changes {color}</h1>
      <button onClick={chnageColor}>Blue</button>
    </div>
  )
}

export default State
