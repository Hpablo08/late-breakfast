import React from "react";
import "./UserCard.css";
import PropTypes from "prop-types";

const UserCard = ({ id, img, name, deleteRestaurant, addFavorite }) => {
  return (
    <div className="user-card">
      <img className="user-image" src={img} alt={name} />
      <h1 className="card-name">{name}</h1>
      <button className="fav-btn" onClick={() => addFavorite(id)}>
        &#10029;
      </button>
      <button className="delete-btn" onClick={() => deleteRestaurant(id)}>
        🗑
      </button>
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  deleteRestaurant: PropTypes.func,
  addFavorite: PropTypes.func,
};
