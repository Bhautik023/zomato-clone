import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Header from "../../components/header/Header";
import RestaurantItem from "../../components/restaurantCard/RestaurantCard";
import {
  editRestaurantData,
  fetchAllRestaurantsRequest,
} from "../../store/restaurant/restaurantSlice";
import { Restaurant } from "../../store/restaurant/apiTypes";
import "./RestaurantList.css";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import { SelectedIcon } from "../../assets/svgs/svgs";

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

  // given task functions

  const [editText, setEditText] = useState({ id: "1", text: "" });
  const [enteredText, setEnteredText] = useState("");

  const getIdHandler = (e: any) => {
    setEditText((prev) => {
      prev.id = e.target.value;
      prev.text = enteredText;
      return prev;
    });
  };

  const editTextHandler = (e: any) => {
    setEnteredText(e.target.value);
  };

  const editHandler = () => {
    dispatch(editRestaurantData(editText));
  };

  // end of given task function

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
      <div className="primaryContainer p-3">
        <div className="filter-primary-container">
          <div className="filter-container ms-5 d-flex gap-2">
            <Button
              onClick={() => {
                filterHandler("Veg");
                setVegActive((prev) => !prev);
              }}
              className={`btn-veg ${
                vegActive ? "active" : ""
              }  btn btn-light bg-white border d-flex align-items-center`}
            >
              <p className="mb-0">Veg</p>
              {vegActive && <SelectedIcon />}
            </Button>
            <Button
              onClick={() => {
                filterHandler("Non-Veg");
                setNonVegActive((prev) => !prev);
              }}
              className={`btn-non-veg ${
                nonVegActive ? "active" : ""
              } btn btn-light bg-white border d-flex align-items-center`}
            >
              <p className="mb-0">Non-Veg</p>
              {nonVegActive && <SelectedIcon />}
            </Button>
            <Button
              onClick={() => {
                filterHandler("All");
                setAllActive((prev) => !prev);
              }}
              className={`btn-all ${
                allActive ? "active" : ""
              } btn btn-light bg-white border d-flex align-items-center`}
            >
              <p className="mb-0">All</p>
              {allActive && <SelectedIcon />}
            </Button>
          </div>
        </div>

        <div className="ms-5 mt-3 fs-4">
          <p className="text-secondary">
            Food Delivery Restaurants in {location}
          </p>
        </div>
        <hr />
        {/* given task HTML statements */}

        <div className="task-container d-flex">
          <InputField
            className="input mx-2"
            type="text"
            onChange={editTextHandler}
            placeholder="enter to edit"
          />
          <select
            className="px-2"
            name="select restaurant Id"
            onChange={getIdHandler}
            id="ids"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <Button className="btn btn-secondary mx-2" onClick={editHandler}>
            Edit
          </Button>
        </div>

        {/* End of given task HTML statements */}
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
