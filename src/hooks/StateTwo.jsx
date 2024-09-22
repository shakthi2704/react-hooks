import React, { useState } from "react"

const StateTwo = () => {
  const [car, setCar] = useState({
    brand: "GMC",
    year: "2023",
    country: "USA",
  })

  const changeModel = () => {
    setCar((prev) => {
      return { ...prev, brand: "audi", year: "2024", country: "german" }
    })
  }
  return (
    <div>
      <h1>the best car model is {car.brand} </h1>
      <h2>car make year is {car.year} </h2>
      <p>production country is {car.country} </p>
      <button onClick={changeModel}>change the model</button>
    </div>
  )
}

export default StateTwo
