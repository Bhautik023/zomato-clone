import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import "./RestaurantsDetails.css";
import Header from "../../components/header/Header";

const RestaurantDetails = () => {
  const { id } = useParams<{ id: any }>();
  const restaurant = useSelector(
    (state: RootState) => state.restaurants.restaurants[id]
  );

  console.log(restaurant.location);

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="container">
        <div className="mb-3">
          <div className="row">
            <div className="col-md-8">
              <img
                className={`image-fluid`}
                src={restaurant.image}
                alt={restaurant.foodType}
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-md-2">
              <img
                className={`image-fluid`}
                src={restaurant.image3}
                alt={restaurant.foodType}
                width="100%"
                height="49%"
              />
              <img
                className={`image-fluid mt-2`}
                src={restaurant.image4}
                alt={restaurant.foodType}
                width="100%"
                height="49%"
              />
            </div>
            <div className="col-md-2">
              <img
                className={`image-fluid`}
                src={restaurant.image2}
                alt={restaurant.foodType}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6">
            <h2>{restaurant.restaurantName}</h2>
            <div className="d-flex gap-2">
              {restaurant.items.map((item: any) => (
                <p>{item.name}</p>
              ))}
            </div>
            <div>
              <a
                className={`btn btn-outline-secondary text-decoration-none`}
                href={restaurant.location}
                target="_blank"
                aria-disabled="true"
              >
                <span className="d-flex align-items-center">
                  <i
                    className={`fa-solid fa-diamond-turn-right whiteIcon fs-12 me-1`}
                  ></i>
                  <p className="mb-0">Direction</p>
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <span>
              <div className="d-flex align-items-center bg-success badge">
                <h6 className="mt-1">{restaurant.rating}</h6>
                <i className="fa-solid fa-star ms-1"></i>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
