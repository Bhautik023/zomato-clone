import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import Header from "../../components/header/Header";
import "./RestaurantsDetails.css";

const RestaurantDetails = () => {
  const { id } = useParams<{ id: any }>();
  const restaurant = useSelector(
    (state: RootState) => state.restaurants.restaurants[id]
  );

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="details-container px">
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
          <div className="restaurant-description w-100 d-flex align-items-baseline py-2 justify-content-between col-md-6">
            <div className="">
              <h2>{restaurant.restaurantName}</h2>
              <div className="d-flex gap-2">
                {restaurant.items.map((item) => (
                  <p>{item.name}</p>
                ))}
              </div>
              <div>
                <Link
                  className={`btn btn-outline-secondary text-decoration-none`}
                  to={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.location}`}
                  target="_blank"
                  aria-disabled="true"
                >
                  <span className="d-flex align-items-center">
                    <i
                      className={`fa-solid fa-diamond-turn-right whiteIcon fs-12 me-1`}
                    ></i>
                    <p className="mb-0">Direction</p>
                  </span>
                </Link>
              </div>
            </div>
            <div className="rating col-md-6 d-flex justify-content-end">
              <span>
                <div className="d-flex align-items-center px-2 bg-success badge">
                  <h6 className="mb-0">{restaurant.rating}</h6>
                  <i className="fa-solid fa-star ms-1"></i>
                </div>
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="item-container d-flex h-100">
          <div className="mt-3">
            <div className="left-container text-danger p-2">
              <p className="mb-0">Order online</p>
            </div>
          </div>
          <div className="items ps-5 mt-0">
            {restaurant.items.map((item: any) => (
              <div
                key={item.name}
                className="menu-item d-flex justify-content-between"
              >
                <div>
                  <h5>{item.name}</h5>
                  <p>Price: ₹{item.price}</p>
                </div>
                <div className="quantity-controls">
                  <button className="btn btn-secondary">-</button>
                  <span className="quantity">0</span>
                  <button className="btn btn-secondary">+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
