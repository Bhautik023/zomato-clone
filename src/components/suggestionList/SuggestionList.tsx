import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import styles from "./SuggestionList.module.css";

const SuggestionList = () => {
  const navigate = useNavigate();
  const { filteredRestaurants, loading, error } = useSelector(
    (state: RootState) => state.restaurants
  );

  const handleItemClick = () => {
    navigate(`/restaurants`);
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={`${styles.container} mt-2`}>
      {filteredRestaurants.length > 0 ? (
        filteredRestaurants.map((item: any, index: number) => (
          <div
            className={styles.suggestionItem}
            key={index}
            onClick={() => handleItemClick()}
          >
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={item.image}
                alt={item.foodType}
              />
            </div>
            <div className={styles.textContainer}>
              <p className={styles.title}>{item.restaurantName}</p>
              <p className={styles.description}>{item.foodType}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SuggestionList;
