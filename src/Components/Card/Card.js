import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ id, img, name, address }) => {
  return (
    <Link to={`/${id}`} className="card" aria-label={name}>
      <img className="image" src={img} alt={name} />
      <h1 className="card-name">{name}</h1>
      <h2 className="card-address">{address}</h2>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
};
