import axios from 'axios';

const apiService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000, // Set a reasonable timeout value
});

export default apiService;
