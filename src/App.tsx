import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import RestaurantList from "./Pages/restaurantList/RestaurantList";
import RestaurantDetails from "./Pages/restaurantDetails/RestaurantsDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
