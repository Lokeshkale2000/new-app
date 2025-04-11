import React from "react";
import "./Card2.css"; // Optional: if you want to style it

const Card2 = ({
  name,
  image,
  rating,
  price,
  cuisines,
  locality,
  deliveryTime,
}) => {
    return (
      <div className="mainpage">
        <div className="card">
          {/* Image with dynamic Cloudinary source */}
          <img className="card-image" src={image} alt={name} />

          <div className="card-details">
            <h2>{name}</h2>

            {/* Joining cuisines array with commas */}
            <p>{cuisines?.join(", ")}</p>

            {/* Area name like location */}
            <p>{locality}</p>

            {/* Average rating and delivery time */}
            <p>
              ⭐ {rating} • {deliveryTime} mins
            </p>

            {/* Cost for two string */}
            <p>{price}</p>
          </div>
        </div>
      </div>
    );
};

export default Card2;
