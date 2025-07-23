import { fetchWeather, setCity, triggerSetDistance } from "../../redux/weatherSlice";


export const mapStateToProps = (state) => ({
    data: state.weather.data,
    loading: state.weather.loading,
    error: state.weather.error,
    city: state.weather.city,
    distance: state.weather.distance
});

export const mapDispatchToProps = (dispatch) => ({
    fetchWeather: () => dispatch(fetchWeather()),
    setCity: (city) => dispatch(setCity(city)),
    setDistance: ({ city1, city2 }) => dispatch(triggerSetDistance({ city1, city2 })),
})