import axios from 'axios';

// Event to trigger token expired modal
export const triggerTokenExpired = () => {
  const event = new CustomEvent('tokenExpired');
  window.dispatchEvent(event);
};

// Create axios instance with interceptors
const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Check if error is due to token expiration
    if (error.response?.status === 401 || 
        error.response?.data?.tokenExpired ||
        error.response?.data?.message?.includes('token') ||
        error.response?.data?.message?.includes('unauthorized')) {
      
      // Trigger token expired event
      triggerTokenExpired();
    }
    
    return Promise.reject(error);
  }
);

export default apiClient; 