// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeather } from '../redux/weatherSlice';
import { mapStateToProps, mapDispatchToProps } from './connectors/weatherConnectors';
import { connect } from 'react-redux';

function WeatherWidget({ data, loading, error, fetchWeather }) {
    if (loading) return <div>Loading weather...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No data provided</div>;

    return (
        <div className="weather-widget">
            <h3>Weather in {data.name}</h3>
            <p>🌡 {data.main.temp}°C</p>
            <p>💨 {data.wind.speed} m/s</p>
            <p>🌤 {data.weather[0].description}</p>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);
