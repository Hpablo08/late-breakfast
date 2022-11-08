import React from "react";
import "./Choices.css"
import Card from "../Card/Card";


const Choices = ({restaurants}) => {
  const displayChoices = restaurants.map((restaurant) => {
    console.log("hey")
    return (
    <Card 
      key={restaurant.id}
      id={restaurant.id}
      img={restaurant.image}
      name={restaurant.name}      
      address={restaurant.address}
    />
    )
  })
  return (
    <div className="choices-container">{displayChoices}</div>
  )
}

export default Choices