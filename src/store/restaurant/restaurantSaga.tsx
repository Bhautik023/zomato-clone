import { call, put, debounce, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  fetchRestaurantsRequest,
  fetchRestaurantsSuccess,
  fetchRestaurantsFailure,
  fetchAllRestaurantsRequest,
  fetchAllRestaurantsSuccess,
  fetchAllRestaurantsFailure,
} from "./restaurantSlice";
import { Restaurant } from "./apiTypes";
import {
  fetchAllRestaurantsAPI,
  fetchRestaurantsApi,
} from "../../apis/searchApi";

function* fetchRestaurantsSaga(
  action: ReturnType<typeof fetchRestaurantsRequest>
): Generator {
  try {
    const response = (yield call(
      fetchRestaurantsApi,
      action.payload
    )) as AxiosResponse<Restaurant[]>;
    const restaurants: Restaurant[] = response.data;
    yield put(fetchRestaurantsSuccess(restaurants));
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      yield put(
        fetchRestaurantsFailure(
          error.response?.data?.message || "An error occurred"
        )
      );
    } else {
      yield put(fetchRestaurantsFailure("An unknown error occurred"));
    }
  }
}

function* fetchAllRestaurantsSaga(): Generator {
  try {
    const response = (yield call(fetchAllRestaurantsAPI)) as AxiosResponse<
      Restaurant[]
    >;
    const restaurants: Restaurant[] = response.data;
    yield put(fetchAllRestaurantsSuccess(restaurants));
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      yield put(
        fetchAllRestaurantsFailure(
          error.response?.data?.message || "An error occurred"
        )
      );
    } else {
      yield put(fetchAllRestaurantsFailure("An unknown error occurred"));
    }
  }
}

function* restaurantSaga() {
  yield debounce(2000, fetchRestaurantsRequest.type, fetchRestaurantsSaga);
  yield takeLatest(fetchAllRestaurantsRequest.type, fetchAllRestaurantsSaga);
}

export default restaurantSaga;
