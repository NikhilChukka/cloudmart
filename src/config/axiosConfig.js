// src/utils/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://ac092281401ee43ba832713632484207-1667546621.us-east-1.elb.amazonaws.com:5000/api', // Use environment variable or fallback
  timeout: 50000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // You can add logic here to attach tokens, etc.
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // You can add logic here to handle responses
    return response;
  },
  (error) => {
    // You can add logic here to handle errors
    return Promise.reject(error);
  }
);

export default instance;
