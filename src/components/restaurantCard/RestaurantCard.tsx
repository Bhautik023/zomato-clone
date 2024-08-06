import React from "react";
import { useNavigate } from "react-router-dom";
import "./RestaurantCard.css";
import { RestaurantItemPropsType } from "./RestaurantItemPropsType";

const RestaurantCard: React.FC<RestaurantItemPropsType> = ({
  id,
  image,
  restaurantName,
  foodType,
  rating,
}) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/restaurant/${id - 1}`);
  };

  return (
    <div
      key={id}
      className="restaurant-item fadeIn p-2"
      onClick={() => handleClick(id)}
    >
      <div className="imageContainer">
        <img className="image" src={image} alt={foodType} />
      </div>
      <div className="description p-2 px-3 description-container w-100 d-flex justify-content-between">
        <div className="text-left">
          <p className="restaurant-title">{restaurantName}</p>
          <p className="restaurant-foodType">{foodType}</p>
        </div>
        <div className="rating d-flex align-items-center">
          <div className="bg-success badge d-flex align-items-center">
            <h6 className=" mb-0">{rating}</h6>
            <i className="fa-solid fa-star ms-1"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
