import { fetchWeather, setCity } from "../../redux/weatherSlice";

export const mapStateToProps = (state) => ({
    data: state.weather.data,
    loading: state.weather.loading,
    error: state.weather.error,
    city: state.weather.city,
});

export const mapDispatchToProps = (dispatch) => ({
    fetchWeather: () => dispatch(fetchWeather()),
    setCity: (city) => dispatch(setCity(city))
})