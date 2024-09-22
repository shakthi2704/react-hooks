import React, { useEffect, useState } from "react"

const Effect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <h1>Time is running seconds: {count}</h1>
    </div>
  )
}

export default Effect
