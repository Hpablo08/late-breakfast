import React from "react";
import "./Choices.css"
import Card from "../Card/Card";
import UserCard from "../UserCard/UserCard";
import PropTypes from "prop-types";

const Choices = ({restaurants}) => {  
  const displayChoices = restaurants.map((restaurant) => {
   if (restaurant.id <= 21) {
    return (
    <Card 
      key={restaurant.id}
      id={restaurant.id}
      img={restaurant.image}
      name={restaurant.name}      
      address={restaurant.address}
    />
    )
   } else {
    return (
      <UserCard
        key={restaurant.id}
        id={restaurant.id}
        img={restaurant.image}
        name={restaurant.name}
      />
    );
   }
  })
  return (
    <div className="choices-container">{displayChoices}</div>
  )
}

export default Choices

Choices.propTypes = {
  restaurants: PropTypes.array  
};