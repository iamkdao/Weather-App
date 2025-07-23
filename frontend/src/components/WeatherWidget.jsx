import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeather } from '../redux/weatherSlice';
import { mapStateToProps, mapDispatchToProps } from './connectors/weatherConnectors';
import { connect } from 'react-redux';

function WeatherWidget({ data, loading, error, city, distance, setDistance }) {
    useEffect(() => {
        if (data && city) {
            setDistance({ city1: data.name, city2: city })
        }
    }, [data, city, setDistance])

    if (loading) return <div>Loading weather...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No data provided</div>;


    console.log(data.name)
    console.log(city)




    return (
        <div className="weather-widget">
            <h3>Guess the weather</h3>
            <p>🌡 {data.main.temp}°C</p>
            <p>💨 {data.wind.speed} m/s</p>
            <p>🌤 {data.weather[0].description}</p>
            {distance && (
                <p>Score: {distance} km</p>
            )}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);
