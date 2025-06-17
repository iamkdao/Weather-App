import axiosInstance from "../api/axiosInstance";
const API_KEY = '052a005fe3729f0026a06e48a12bd0a0'; // Get from OpenWeatherMap
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeatherByCity(city) {
    try {
        const res = await axiosInstance.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        return res.data;
    }
    catch (error) {
        throw error;
    }
}