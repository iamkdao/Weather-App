import { getCoords } from "../../services/WeatherAPI";

export const calculateDistance = async (city1, city2) => {
    const res1 = await getCoords(city1)
    const res2 = await getCoords(city2)
    console.log(res1)

    const lat1 = res1.lat
    const lon1 = res1.lng
    const lat2 = res2.lat
    const lon2 = res2.lng

    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
};

export const calculateScore = (distance) => {
    const maxDistance = 14000; // km
    const maxScore = 1000;

    if (distance >= maxDistance) return 1;

    const score = maxScore * Math.exp(-5 * (distance / maxDistance));
    return Math.round(score);
};

export const storeHighScore = (score) => {
    const highScore = sessionStorage.getItem('highScore') | 0;
    if (score > highScore) {
        sessionStorage.setItem('highScore', score);
    }
}

export const getHighScore = () => {
    return parseInt(sessionStorage.getItem('highScore')) || 0;
}