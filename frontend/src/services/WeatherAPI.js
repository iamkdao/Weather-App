const API_KEY = '052a005fe3729f0026a06e48a12bd0a0'; // Get from OpenWeatherMap
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeatherByCity(city) {
    const res = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
}