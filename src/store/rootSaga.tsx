import { all, fork } from 'redux-saga/effects';
import locationSaga from './location/locationSaga';
import restaurantSaga from './restaurant/restaurantSaga';

export default function* rootSaga() {
  yield all([fork(locationSaga), fork(restaurantSaga)]);
}
