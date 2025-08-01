import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchWeather, fetchWeatherSuccess, fetchWeatherFailure, triggerSetDistance, setDistanceSuccess, setScore, setHighScore } from './weatherSlice';
import { getWeatherByCity } from '../services/WeatherAPI';
import { calculateDistance, calculateScore, storeHighScore, getHighScore } from '../components/connectors/weatherUtils';

function* handleFetchWeather(action) {
    try {
        const data = yield call(getWeatherByCity)
        yield put(fetchWeatherSuccess(data));
    } catch (error) {
        yield put(fetchWeatherFailure(error.message));
    }
}

function* initializeHighScore() {
    try {
        const highScore = yield call(getHighScore);
        yield put(setHighScore(highScore));
    } catch (error) {
        console.error('Failed to initialize high score:', error);
    }
}

function* handleSetDistance(action) {
    try {
        const { city1, city2 } = action.payload;
        const distance = yield call(calculateDistance, city1, city2);
        // You can create a success action if needed
        console.log('Distance calculated:', distance);
        const score = yield call(calculateScore, distance)
        // Dispatch a success action if you want to store it
        yield put(setDistanceSuccess(distance))
        yield put(setScore(score))
        yield call(storeHighScore, score)

        // Update high score in store if it's a new record
        const currentHighScore = yield call(getHighScore);
        yield put(setHighScore(currentHighScore));
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

export function* initSaga() {
    yield call(initializeHighScore);
}