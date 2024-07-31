import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from "./SearchInput.module.css";
import SuggestionList from "../suggestionList/SuggestionList";
import { useOutsideClick } from "../useOutsideClick/useOutsideClick";
import { fetchRestaurantsRequest } from '../../store/restaurant/restaurantSlice';
import { RootState } from "../../store/store";
import { fetchLocationRequest } from "../../store/location/locationSlice";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const location = useSelector((state :RootState) => state.location.city)
  const dispatch = useDispatch();

  // Custom Hook for detect outside click
  const ref = useOutsideClick(() => {
    setSearching(false);
  });

  const fetchLocationHandler = () => {
    dispatch(fetchLocationRequest())
    console.log(location)
  }

  const searchQueryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    dispatch(fetchRestaurantsRequest(e.target.value));
    setSearching(true);
  };

  return (
    <div className={`${styles.searchBar} input-group`}>
      <div className={styles.locationInput}>
        <div className={`${styles.locationContainer} location-input`}>
          <svg
            className={styles.locationIcon}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ff7e8b"
            onClick={fetchLocationHandler}
          >
            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
          </svg>
          <input
            type="text"
            className={`${styles.formControl} form-control .bg-white`}
            placeholder="fetch-Location"
            value={location}
            onClick={fetchLocationHandler}
            disabled
          />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div ref={ref} className={styles.searchInputContainer}>
        <div className={`${styles.searchInputBar} search-input`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#828282"
            width="18"
            height="18"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            className="sc-rbbb40-0 iwHbVQ"
          >
            <title>Search</title>
            <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z" />
          </svg>
          <input
            type="text"
            className={`${styles.formControl} form-control`}
            placeholder="Search..."
            onChange={searchQueryHandler}
          />
        </div>
        <div className={styles.searchSuggestionsContainer}>
          {searching && (
            <SuggestionList/>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
