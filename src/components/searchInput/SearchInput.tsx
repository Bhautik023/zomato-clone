import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SuggestionList from "../suggestionList/SuggestionList";
import { useOutsideClick } from "../useOutsideClick/useOutsideClick";
import { fetchRestaurantsRequest } from "../../store/restaurant/restaurantSlice";
import { RootState } from "../../store/store";
import { fetchLocationRequest } from "../../store/location/locationSlice";
import InputField from "../inputField/InputField";
import { LocationIcon, SearchIcon } from "../../assets/svgs/svgs";
import "./SearchInput.css";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const fetchedLocation = useSelector(
    (state: RootState) => state.location.city
  );
  const dispatch = useDispatch();

  // Custom Hook for detect outside click
  const ref = useOutsideClick(() => {
    setSearching(false);
  });

  const fetchLocationHandler = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      latitude && longitude && dispatch(fetchLocationRequest());
    });
  };

  const searchQueryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    dispatch(fetchRestaurantsRequest(searchQuery));
    setSearching(true);
  };

  return (
    <div className="searchBar input-group">
      <div className="locationInput">
        <div className="locationContainer location-input">
          <LocationIcon onClick={fetchLocationHandler} />
          <InputField
            type="text"
            className="formControl form-control .bg-white"
            placeholder={
              fetchedLocation == "Your City"
                ? "Fetch Location"
                : fetchedLocation
            }
            value={fetchedLocation == "Your City" ? '' : fetchedLocation}
            onChange={() => {}}
            onClick={fetchLocationHandler}
          />
        </div>
      </div>
      <div className="divider"></div>
      <div ref={ref} className="search-input-container">
        <div className="searchInputBar search-input">
          <SearchIcon />
          <InputField
            type="text"
            className="formControl form-control .bg-white"
            placeholder="Search..."
            onChange={searchQueryHandler}
          />
        </div>
        <div className="searchSuggestionsContainer">
          {searching && <SuggestionList />}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
