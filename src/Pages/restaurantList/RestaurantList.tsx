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
  const [vegActive, setVegActive] = useState(false);
  const [nonVegActive, setNonVegActive] = useState(false);
  const [allActive, setAllActive] = useState(false);
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
        <div className="filter-primary-container">
          <div className="filter-container ms-5 d-flex gap-2">
            <button
              onClick={() => {
                filterHandler("Veg");
                setVegActive((prev) => !prev);
              }}
              className={`btn-veg ${
                vegActive ? "active" : ""
              }  btn btn-light bg-white border d-flex align-items-center`}
            >
              <p className="mb-0">Veg</p>
              {vegActive && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x mt-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              )}
            </button>
            <button
              onClick={() => {
                filterHandler("Non-Veg");
                setNonVegActive((prev) => !prev);
              }}
              className={`btn-non-veg ${
                nonVegActive ? "active" : ""
              } btn btn-light bg-white border d-flex align-items-center`}
            >
              <p className="mb-0">Non-Veg</p>
              {nonVegActive && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x mt-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              )}
            </button>
            <button
              onClick={() => {
                filterHandler("All");
                setAllActive((prev) => !prev);
              }}
              className={`btn-all ${
                allActive ? "active" : ""
              } btn btn-light bg-white border d-flex align-items-center`}
            >
              <p className="mb-0">All</p>
              {allActive && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x mt-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="ms-5 mt-3 fs-4">
          <p className="text-secondary">
            Food Delivery Restaurants in {location}
          </p>
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
