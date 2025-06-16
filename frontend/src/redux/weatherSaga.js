import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchWeather, fetchWeatherSuccess, fetchWeatherFailure } from './weatherSlice';

function* handleFetchWeather(action) {
    try {
        const res = yield call(fetch, `/api/weather?city=${action.payload}`)
        const data = yield res.json();
        if (res.ok) {
            yield put(fetchWeatherSuccess(data));
        }
    } catch (error) {
        yield put(fetchWeatherFailure(error.message));
    }
}

export default function* weatherSaga() {
    yield takeLatest(fetchWeather.type, handleFetchWeather);
}