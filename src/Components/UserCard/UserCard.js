import React from "react";
import "./UserCard.css"


const UserCard = ({img, name}) => {
  return (
    <div className="user-card">
      <img className="image" src={img} alt={name} />
      <h1 className="card-name">{name}</h1>
    </div>
  );
}

export default UserCard