import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import loader from "../../assets/loader.gif";
import "./SuggestionList.css";

interface itemType {
  image: string;
  foodType: string;
  restaurantName: string;
}

const SuggestionList = () => {
  const navigate = useNavigate();
  const { filteredRestaurants, loading, error } = useSelector(
    (state: RootState) => state.restaurants
  );

  const handleItemClick = () => {
    navigate(`/restaurants`);
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={`container p-1 mt-2`}>
      {loading ? (
        <div className="loader-container d-flex justify-content-center align-items-center">
          <img className="loading" height="50%" src={loader} alt="Loading" />
        </div>
      ) : filteredRestaurants.length > 0 ? (
        filteredRestaurants.map((item: itemType, index: number) => (
          <div
            className="suggestionItem"
            key={index}
            onClick={() => handleItemClick()}
          >
            <div className="image-container">
              <img className="image" src={item.image} alt={item.foodType} />
            </div>
            <div className="textContainer">
              <p className="title">{item.restaurantName}</p>
              <p className="description">{item.foodType}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-danger">No results found</p>
      )}
    </div>
  );
};

export default SuggestionList;
