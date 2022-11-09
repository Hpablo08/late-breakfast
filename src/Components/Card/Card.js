import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"



const Card = ({id, img, name, address}) => {
return (
  <Link to={`/${id}`} className="card" aria-label={name}>
    <img className="image" src={img} alt={name} />
    <h1 className="card-name">{name}</h1>
   <h2 className="card-address">{address}</h2>
   <h2 className="click">Click for more details</h2>
  </Link>
);
}

export default Card