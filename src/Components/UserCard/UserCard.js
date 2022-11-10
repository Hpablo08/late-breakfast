import React from "react";
import "./UserCard.css";
import PropTypes from "prop-types";

const UserCard = ({ img, name }) => {
  return (
    <div className="user-card">
      <img className="user-image" src={img} alt={name} />
      <h1 className="card-name">{name}</h1>
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {  
  img: PropTypes.string,
  name: PropTypes.string, 
};