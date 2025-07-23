import { all } from 'redux-saga/effects';
import { weatherSaga, distanceSaga } from './weatherSaga';

export default function* rootSaga() {
    yield all([
        weatherSaga(),
        distanceSaga()
    ]);
}
