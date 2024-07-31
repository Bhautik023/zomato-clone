import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Header from "../../components/header/Header";
import RestaurantItem from "../../components/restaurantCard/RestaurantCard";
import { fetchAllRestaurantsRequest } from "../../store/restaurant/restaurantSlice";
import { Restaurant } from "../../store/restaurant/apiTypes";
import "./RestaurantList.css";

const RestaurantList = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("All");
  const allRestaurants = useSelector(
    (state: RootState) => state.restaurants.restaurants
  );
  const location = useSelector((state: RootState) => state.location.city);

  useEffect(() => {
    dispatch(fetchAllRestaurantsRequest());
  }, [dispatch]);

  const filterHandler = (type: string) => {
    setFilter(type);
  };

  const getFilteredRestaurants = () => {
    if (filter === "Veg") {
      return allRestaurants.filter((item) => item.foodType === "Veg");
    } else if (filter === "Non-Veg") {
      return allRestaurants.filter((item) => item.foodType === "No-Veg");
    }
    return allRestaurants;
  };

  const filteredRestaurants = getFilteredRestaurants();

  return (
    <>
      <div>
        <Header />
      </div>
      <div className={`primaryContainer p-3`}>
        <div className="filter-container ms-5 d-flex gap-2">
          <button
            onClick={() => filterHandler("Veg")}
            className={`btn btn-light border`}
          >
            Veg
          </button>
          <button
            onClick={() => filterHandler("Non-Veg")}
            className={`btn btn-light border`}
          >
            Non-Veg
          </button>
          <button
            onClick={() => filterHandler("All")}
            className={`btn btn-light border`}
          >
            All
          </button>
        </div>
        <div className="ms-5 mt-3 fs-4">
          <p>Food Delivery Restaurants in {location}</p>
        </div>
        <hr />
        <div className={`seconderyContainer px-3 py-3`}>
          {filteredRestaurants.map((restaurant: Restaurant, index: number) => (
            <RestaurantItem
              rating={restaurant.rating}
              key={index}
              id={restaurant.id}
              image={restaurant.image}
              items={restaurant.items}
              restaurantName={restaurant.restaurantName}
              foodType={restaurant.foodType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantList;
