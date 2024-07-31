import { combineReducers } from "@reduxjs/toolkit";
import locationReducer from "./location/locationSlice";
import restaurantReducer from "./restaurant/restaurantSlice";

const rootReducer = combineReducers({
  location: locationReducer,
  restaurants: restaurantReducer,
});

export default rootReducer;
