import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setitemCount] = useState(0);

  return (
    <div className="food-item">
      <div className="food-item-container">
        <img className="food-item-image" src={image} alt="" />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => setitemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => setitemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{itemCount}</p>
            <img
              onClick={() => setitemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">LE{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
