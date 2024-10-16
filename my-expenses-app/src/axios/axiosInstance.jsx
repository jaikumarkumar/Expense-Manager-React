import axios from 'axios';
import {API_BASE_URL} from '../constants/constants';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // Replace with your API base URL
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config here (e.g., add headers, authentication tokens)
    const accessToken = localStorage.getItem("token");

    // ** If token is present add it to request's Authorization Header
    if (accessToken) {
      if (config.headers) config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here (e.g., parse, transform)
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

export default axiosInstance;