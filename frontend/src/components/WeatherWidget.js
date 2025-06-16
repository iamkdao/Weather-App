import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';

function WeatherWidget({ city = 'London' }) {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.weather);

    useEffect(() => {
        dispatch(fetchWeather(city));
    }, [dispatch, city]);

    if (loading) return <div>Loading weather...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return null;

    return (
        <div className="weather-widget">
            <h3>Weather in {data.name}</h3>
            <p>🌡 {data.main.temp}°C</p>
            <p>💨 {data.wind.speed} m/s</p>
            <p>🌤 {data.weather[0].description}</p>
        </div>
    );
}

export default WeatherWidget;
