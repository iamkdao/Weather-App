import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null,
        loading: false,
        error: null,
        city: null,
        distance: null,
    },
    reducers: {
        fetchWeather: (state, action) => {
            state.loading = true;
        },
        fetchWeatherSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchWeatherFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setDistanceSuccess: (state, action) => {
            state.distance = action.payload;
        },
        triggerSetDistance: (state, action) => { },
    },
});

export const { fetchWeather, fetchWeatherSuccess, fetchWeatherFailure, setCity, setDistanceSuccess, triggerSetDistance } = weatherSlice.actions;
export default weatherSlice.reducer;