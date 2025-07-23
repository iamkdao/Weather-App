import axiosInstance from "../api/axiosInstance";
import { API } from "../apiConfigs.ts";
const API_KEY = API.OPENWEATHER.API_KEY; // Get from OpenWeatherMap
const BASE_URL = API.OPENWEATHER.URL;

const getRandomLongLat = () => {
    const lat = Math.random() * 180 - 90;
    const long = Math.random() * 360 - 180;

    const latRounded = Math.round(lat * 100) / 100
    const longRounded = Math.round(long * 100) / 100

    return {
        lat: latRounded,
        long: longRounded
    }
}
export async function getWeatherByCity() {
    try {
        const coord = getRandomLongLat();
        const res = await axiosInstance.get(`${BASE_URL}?lat=${coord.lat}&lon=${coord.long}&appid=${API_KEY}&units=metric`)
        if (res.data.name === '') {
            return getWeatherByCity()
        }
        return res.data;
    }
    catch (error) {
        throw error
    }
}

export async function getCoords(city) {
    try {
        const res = await axiosInstance.get(`${API.GOOGLE_MAPS.URL}geocode/json?address=${city}&key=${API.GOOGLE_MAPS.API_KEY}`)
        const coords = res.data.results[0].geometry.location
        return coords
    }
    catch (error) {
        throw error
    }
}