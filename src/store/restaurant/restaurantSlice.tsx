import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant } from "./apiTypes";

interface RestaurantState {
  restaurants: Restaurant[];
  filteredRestaurants: Restaurant[];
  loading: boolean;
  error: string | null;
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("restaurantState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    console.error("Could not load state", err);
    return undefined;
  }
};

const saveState = (state: RestaurantState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("restaurantState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const initialState: RestaurantState = loadState() || {
  restaurants: [],
  filteredRestaurants: [],
  loading: false,
  error: null,
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    fetchRestaurantsRequest: (state, action: PayloadAction<string>) => {
      state.loading = true;
    },
    fetchRestaurantsSuccess: (state, action: PayloadAction<Restaurant[]>) => {
      state.restaurants = action.payload;
      state.filteredRestaurants = action.payload;
      state.loading = false;
      state.error = null;
      saveState(state);
    },
    fetchRestaurantsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      saveState(state);
    },
    fetchAllRestaurantsRequest: (state) => {
      state.loading = true;
    },
    fetchAllRestaurantsSuccess: (
      state,
      action: PayloadAction<Restaurant[]>
    ) => {
      state.restaurants = action.payload;
      state.loading = false;
      state.error = null;
      saveState(state);
    },
    fetchAllRestaurantsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      saveState(state);
    },
    // given task edit reducer
    editRestaurantData: (state, action: PayloadAction<any>) => {
      const id = +action.payload.id;
      state.restaurants[id - 1].restaurantName = action.payload.text;
      saveState(state);
    },
  },
});

export const {
  fetchRestaurantsRequest,
  fetchRestaurantsSuccess,
  fetchRestaurantsFailure,
  fetchAllRestaurantsRequest,
  fetchAllRestaurantsSuccess,
  fetchAllRestaurantsFailure,
  editRestaurantData,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
