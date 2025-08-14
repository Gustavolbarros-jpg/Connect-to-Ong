import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../../api/tokenInterceptor";
import backgroundImage from "../../assets/images/background-login.png";
import logoRecife from "../../assets/images/logo-recife.png";
import Button from "../../Components/Button/";
import InputField from "../../Components/InputField/";
import InputBack from "../../assets/images/voltar.png";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  // Estados para os dados do formulário, erros de validação e erro da API
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Novo estado para loading

  // Função genérica para atualizar o estado do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (validationErrors[name]) {
      setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }

    if (apiError) {
      setApiError("");
    }
  };

  // Função para validar os campos do formulário
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Por favor, insira um endereço de e-mail válido.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Por favor, insira a sua senha.";
    }
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setApiError("");

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setValidationErrors(formErrors);
      return;
    }

    setIsLoading(true); // Ativa estado de loading

    try {
      // Limpeza completa antes do novo login
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Força uma nova instância do axios para evitar cache
      const freshApiClient = apiClient.create();
      const response = await freshApiClient.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // Verificação robusta da resposta
      if (!response.data?.token) {
        throw new Error("Token não recebido do servidor");
      }

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user || {}));

      // Reset do formulário após login bem-sucedido
      setFormData({ email: "", password: "" });

      if (onLogin) {
        onLogin(); // Notifica o App sobre o login
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("Erro no login:", error);

      // Limpeza em caso de erro
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      setApiError(
        error.response?.data?.message ||
          "Erro ao conectar com o servidor. Tente novamente."
      );
    } finally {
      setIsLoading(false); // Desativa loading em qualquer caso
    }
  };

  return (
    <div className="flex min-h-screen font-sans bg-gray-50">
      <div className="w-full lg:w-1/2 bg-white p-4 md:p-8 lg:p-12 font-medium flex flex-col justify-between">
        <div className="relative pt-4 pl-4 pb-[70px] md:pb-2">
          <Link to="/" className="absolute z-10">
            <img src={InputBack} alt="Voltar" className="h-8 md:h-8 lg:h-8" />
          </Link>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-xl">
            <h1 className="text-4xl md:text-5xl text-gray-800 mb-8 text-left">
              Acesse sua conta
            </h1>

            {apiError && (
              <div className="mb-4 rounded-[4px] bg-red-100 p-4 text-center text-base font-semibold text-red-700">
                {apiError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <InputField
                  label="E-mail:"
                  name="email"
                  type="email"
                  placeholder="Digite seu e-mail..."
                  value={formData.email}
                  onChange={handleChange}
                  className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 py-3 text-gray-800"
                  labelClassName="text-gray-800"
                />
                {validationErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.email}
                  </p>
                )}
              </div>
              <div>
                <InputField
                  label="Senha:"
                  name="password"
                  type="password"
                  placeholder="Digite sua Senha..."
                  value={formData.password}
                  onChange={handleChange}
                  className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 py-3 text-gray-800"
                  labelClassName="text-gray-800"
                />
                {validationErrors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.password}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                primary
                className="w-full mt-6 text-lg md:text-xl flex justify-center items-center"
                disabled={isLoading}
              >
                {isLoading ? "Carregando..." : "Entrar"}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-3">
              <Link
                to="/verification-email"
                className="text-lg text-blue-600 hover:text-blue-800"
              >
                Esqueci a senha
              </Link>
              <p className="text-base text-gray-600">
                Não tem uma conta?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
                >
                  Cadastre-se
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end mt-8 w-full">
          <img
            src={logoRecife}
            alt="Logo Recife Proteção"
            className="h-19 md:h-24"
          />
          <Link to="/register-ong">
            <Button primary>Acesso ONGs</Button>
          </Link>
        </div>
      </div>

      <div
        className="hidden lg:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
    </div>
  );
}

export default LoginPage;