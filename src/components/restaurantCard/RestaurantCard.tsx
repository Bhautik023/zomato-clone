import React from "react";
import { useNavigate } from "react-router-dom";
import "./RestaurantCard.css";

interface RestaurantItemProps {
  restaurantName: string;
  key: number;
  id: number;
  rating: number;
  image: string;
  foodType: string;
  items: { id: Number; name: string; price: Number }[];
}

const RestaurantCard: React.FC<RestaurantItemProps> = ({
  id,
  image,
  restaurantName,
  foodType,
  rating,
}) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/restaurant/${id - 1}`);
    console.log(id);
  };

  return (
    <div
      key={id}
      className="restaurantItem fadeIn"
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
            <h6 className="mt-1 mb-0">{rating}</h6>
            <i className="fa-solid fa-star ms-1"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
