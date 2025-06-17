import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000,
})

axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
)

export default axiosInstance;