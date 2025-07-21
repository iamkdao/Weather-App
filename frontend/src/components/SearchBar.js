import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchWeather } from '../redux/weatherSlice';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connectors/weatherConnectors';

export function SearchBar({ city, fetchWeather, setCity }) {
    const handleSearch = (e) => {
        e.preventDefault();
        if (city.trim() !== '') {
            fetchWeather();
        }
    }

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather])
    return (
        <form className="d-flex my-2 my-lg-0" >
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            // value={city}
            // onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)