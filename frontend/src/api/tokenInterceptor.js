import axios from "axios";

// Evento para disparar o modal de token expirado
export const triggerTokenExpired = () => {
  const event = new CustomEvent("tokenExpired");
  window.dispatchEvent(event);
};

// Cria a instância do axios 
//mudança agora para consumir o .env do fron
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de Requisição para adicionar o token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de Resposta para lidar com renovação e expiração do token
apiClient.interceptors.response.use(
  (response) => {
    // --- INÍCIO DA LÓGICA DE ATUALIZAÇÃO DO TOKEN ---
    // Verifica se a resposta veio com o cabeçalho 'x-new-token'
    const newToken = response.headers["x-new-token"];

    // Se existir um novo token, atualiza o localStorage.
    if (newToken) {
      localStorage.setItem("token", newToken);
    }
    // --- FIM DA LÓGICA DE ATUALIZAÇÃO DO TOKEN ---

    return response;
  },
  (error) => {
    // A lógica de erro permanece a mesma.
    // Ela agora só será acionada se o usuário ficar inativo por mais de 15 minutos.
    if (
      error.response?.status === 401 ||
      error.response?.data?.tokenExpired ||
      error.response?.data?.body?.message?.includes("expirado")
    ) {
      triggerTokenExpired();
    }

    return Promise.reject(error);
  }
);

export default apiClient;
