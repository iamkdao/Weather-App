import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchWeather, fetchWeatherSuccess, fetchWeatherFailure, triggerSetDistance } from './weatherSlice';
import { getWeatherByCity } from '../services/WeatherAPI';
import { calculateDistance } from '../components/connectors/weatherUtils';

function* handleFetchWeather(action) {
    try {
        const data = yield call(getWeatherByCity)
        yield put(fetchWeatherSuccess(data));
    } catch (error) {
        yield put(fetchWeatherFailure(error.message));
    }
}

function* handleSetDistance(action) {
    try {
        const { city1, city2 } = action.payload;
        const distance = yield call(calculateDistance, city1, city2);
        // You can create a success action if needed
        console.log('Distance calculated:', distance);
        // Dispatch a success action if you want to store it
    } catch (error) {
        yield put(fetchWeatherFailure(error.message));
    }
}

export function* weatherSaga() {
    yield takeLatest(fetchWeather.type, handleFetchWeather);
}

export function* distanceSaga() {
    yield takeLatest(triggerSetDistance.type, handleSetDistance);
}