import { fetchWeather, setCity } from "./weatherSlice";

export const mapStateToProps = (state) => ({
    data: state.weather.data,
    loading: state.weather.loading,
    error: state.weather.error,
    city: state.weather.city,
});

export const mapDispatchToProps = (dispatch) => ({
    fetchWeather: (city) => dispatch(fetchWeather(city)),
    setCity: (city) => dispatch(setCity(city))
})