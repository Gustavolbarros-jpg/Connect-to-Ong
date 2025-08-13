import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

apiClient.interceptors.response.use(response => response, error => {
  if (error.response?.status === 401) {
    localStorage.removeItem('token'); // Limpa o token inválido
    window.dispatchEvent(new CustomEvent('tokenExpired'));
  }
  return Promise.reject(error);
});

export default apiClient;