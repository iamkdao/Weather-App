import axiosInstance from "../api/axiosInstance";
const API_KEY = '052a005fe3729f0026a06e48a12bd0a0'; // Get from OpenWeatherMap
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

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
        return res.data;
    }
    catch (error) {
        throw error;
    }
}