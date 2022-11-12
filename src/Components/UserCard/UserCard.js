import React from "react";
import "./UserCard.css";
import PropTypes from "prop-types";

const UserCard = ({id, img, name, deleteRestaurant }) => {
  return (
    <div className="user-card">
      <img className="user-image" src={img} alt={name} />
      <h1 className="card-name">{name}</h1>
      <button className="fav-btn" title="Add Favorite">
        &#10029;
      </button>
      <button onClick={() => deleteRestaurant(id)}>🗑</button>
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {  
  img: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  deleteRestaurant: PropTypes.func 
};