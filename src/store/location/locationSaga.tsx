import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchLocationRequest,
  fetchLocationSuccess,
  fetchLocationFailure,
} from "./locationSlice";
import { LocationResponse } from "./apiTypes";
import fetchLocation from "../../apis/fetchLocation";

function* fetchLocationSaga() {
  try {
    const response: { data: LocationResponse; status: number } = yield call(
      fetchLocation
    );
    if (response.status === 200) {
      yield put(fetchLocationSuccess(response.data.city));
    } else {
      yield put(fetchLocationFailure("Failed to fetch location"));
    }
  } catch (error) {
    yield put(fetchLocationFailure("Failed to fetch location"));
  }
}

export default function* locationSaga() {
  yield takeLatest(fetchLocationRequest.type, fetchLocationSaga);
}
