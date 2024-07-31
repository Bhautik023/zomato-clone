import { call, put, takeLatest } from "redux-saga/effects";
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

const fetchRestaurantsApi = async (
  query: string
): Promise<AxiosResponse<Restaurant[]>> => {
  const response = await axios.post(
    `http://192.168.1.32:5500/search`,
    { search: query },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response;
};

const fetchAllRestaurantsAPI = async (): Promise<
  AxiosResponse<Restaurant[]>
> => {
  const response = await axios.get("http://192.168.1.32:5500/restaurant");
  return response;
};

function* fetchRestaurantsSaga(
  action: ReturnType<typeof fetchRestaurantsRequest>
): Generator {
  try {
    const response = (yield call(
      fetchRestaurantsApi,
      action.payload
    )) as AxiosResponse<Restaurant[]>;
    const restaurants: Restaurant[] = response.data;
    console.log(restaurants);
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
  yield takeLatest(fetchRestaurantsRequest.type, fetchRestaurantsSaga);
  yield takeLatest(fetchAllRestaurantsRequest.type, fetchAllRestaurantsSaga);
}

export default restaurantSaga;
