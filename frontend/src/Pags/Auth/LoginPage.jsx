import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../../api/tokenInterceptor";
import backgroundImage from "../../assets/images/background-login.png";
import logoRecife from "../../assets/images/logo-recife.png";
import Button from "../../Components/Button/";
import InputField from "../../Components/InputField/";
import InputBack from "../../assets/images/voltar.png";

function LoginPage() {
  const navigate = useNavigate();

  // Estados para os dados do formulário, erros de validação e erro da API
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [apiError, setApiError] = useState("");

  // Função genérica para atualizar o estado do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    // Limpa o erro do campo quando o utilizador começa a corrigir
    if (validationErrors[name]) {
      setValidationErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
    // Limpa o erro da API ao tentar corrigir os dados
    if(apiError) {
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
    setApiError(""); // Limpa erros antigos da API
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setValidationErrors(formErrors);
      return; // Impede o envio se houver erros de validação
    }

    try {
      const response = await apiClient.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/profile");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "E-mail ou senha incorretos. Tente novamente.";

      console.error("Erro ao fazer login:", error.response || error);
      setApiError(errorMessage); // Define o erro vindo da API
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
                {validationErrors.email && <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>}
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
                {validationErrors.password && <p className="text-red-500 text-sm mt-1">{validationErrors.password}</p>}
              </div>
              <Button
                type="submit"
                primary
                className="w-full mt-6 text-lg md:text-xl flex justify-center items-center"
              >
                Entrar
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
            <Button primary>
              Acesso ONGs
            </Button>
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
