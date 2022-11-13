import React from "react";
import Card from "../Card/Card";
import UserCard from "../UserCard/UserCard";
import './Favorites.css'

const Favorites = ({faveRest, deleteRestaurant}) => {
let displayChoices
if (!faveRest.length) {
  displayChoices = <h1 className="favorite">You Have NO Favorites</h1>;
} else {
 displayChoices = faveRest.map((restaurant) => {
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
        deleteRestaurant={deleteRestaurant}
      />
    );
   }
  })
}
  return (
    <div className="fave-container">{displayChoices}</div>
  )
}


export default Favorites