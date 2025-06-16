import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';

export function SearchBar() {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        if (city.trim() !== '') {
            dispatch(fetchWeather(city));
        }
    }
    return (
        <form class="d-flex my-2 my-lg-0" onSubmit={handleSearch}>
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    );
}

export default SearchBar