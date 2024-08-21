import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationStateType {
  city: string;
  error: string | null;
}

const initialState: LocationStateType = {
  city: "Your City",
  error: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    fetchLocationRequest: (state) => {},
    fetchLocationSuccess: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
      state.error = null;
    },
    fetchLocationFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {
  fetchLocationRequest,
  fetchLocationSuccess,
  fetchLocationFailure,
} = locationSlice.actions;

export default locationSlice.reducer;
