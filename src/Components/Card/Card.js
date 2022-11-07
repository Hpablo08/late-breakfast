import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"



const Card = ({id, img, name, time, websiteLink, address}) => {
return (
  <Link to={`/${id}`} className="card" aria-label={name}>
    <img className="image" src={img} alt={name} />
    <h1 className="card-name">{name}</h1>
   <h2 className="card-time">{address}</h2>
  </Link>
);
}

export default Card