import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  city: string;
  error: string | null;
}

const initialState: LocationState = {
  city: "Fetch location",
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
