import axios from 'axios';

// Cria uma instância do Axios com a URL base do seu backend
const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

// Isso é um "interceptor": uma função que é executada ANTES de cada requisição sair
apiClient.interceptors.request.use(
  (config) => {
    // Pega o token do localStorage
    const token = localStorage.getItem('token');
    
    // Se o token existir, adiciona ao cabeçalho 'Authorization'
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config; // Retorna a configuração da requisição com o header adicionado
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;