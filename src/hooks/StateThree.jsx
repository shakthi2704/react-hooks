import React, { useState } from "react"

const StateThree = () => {
  const [count, setCount] = useState(1)

  const increase = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrease = () => {
    setCount((prevCount) => prevCount - 1)
  }

  const reset = () => {
    setCount(0)
    console.log(0)
  }

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default StateThree
