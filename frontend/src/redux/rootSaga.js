import { all } from 'redux-saga/effects';
import { weatherSaga, distanceSaga, initSaga } from './weatherSaga';

export default function* rootSaga() {
    yield all([
        weatherSaga(),
        distanceSaga(),
        initSaga()
    ]);
}
