// axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
//   baseURL: 'https://your-api-base-url.com', // Replace with your actual API base URL
  baseURL: 'http://localhost:3000', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need here
  },
});

export default axiosInstance;