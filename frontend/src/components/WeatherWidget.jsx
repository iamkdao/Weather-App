import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeather } from '../redux/weatherSlice';
import { mapStateToProps, mapDispatchToProps } from './connectors/weatherConnectors';
import { connect } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import Button from '@mui/material/Button';

function WeatherWidget({ data, loading, error, city, setCity, distance, setDistance, score, fetchWeather, setScore }) {
    useEffect(() => {
        if (data && city) {
            setDistance({ city1: data.name, city2: city })
        }
    }, [data, city, setDistance])

    const handleFetch = (e) => {
        e.preventDefault();
        setCity('');
        setScore(null);
        fetchWeather();
    }

    // if (loading) return <div>Loading weather...</div>;
    // if (error) return <div>Error: {error}</div>;
    // // if (!data) return <div>No data provided</div>;


    console.log(data?.name)
    console.log(city)
    console.log(distance)
    console.log(score)

    return (
        <div className="weather-widget">
            <h3>Guess the weather</h3>
            {data && (
                <>
                    <p>🌡 {data?.main.temp}°C</p>
                    <p>💨 {data?.wind.speed} m/s</p>
                    <p>🌤 {data?.weather[0].description}</p>
                </>
            )}

            {
                score && (
                    <p>Score: {score}</p>
                )
            }
            <Button variant="contained" onClick={handleFetch}>
                <ReplayIcon />
            </Button>
        </div >
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);
