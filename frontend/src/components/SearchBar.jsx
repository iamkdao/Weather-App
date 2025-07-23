import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchWeather } from '../redux/weatherSlice';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connectors/weatherConnectors';

export function SearchBar({ city, fetchWeather, setCity }) {
    const [inputValue, setInputValue] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setCity(inputValue)
        }
    }

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather])
    return (
        <form className="d-flex my-2 my-lg-0" onSubmit={handleSearch} >
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)