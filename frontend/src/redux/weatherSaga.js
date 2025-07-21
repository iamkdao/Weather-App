import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchWeather, fetchWeatherSuccess, fetchWeatherFailure } from './weatherSlice';
import { getWeatherByCity } from '../services/WeatherAPI';

function* handleFetchWeather(action) {
    try {
        const data = yield call(getWeatherByCity)
        yield put(fetchWeatherSuccess(data));
    } catch (error) {
        yield put(fetchWeatherFailure(error.message));
    }
}

export default function* weatherSaga() {
    yield takeLatest(fetchWeather.type, handleFetchWeather);
}