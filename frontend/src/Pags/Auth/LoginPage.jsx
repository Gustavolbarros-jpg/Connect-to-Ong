import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // 1. Importar o axios
import backgroundImage from "../../assets/images/background-login.png";
import logoRecife from "../../assets/images/logo-recife.png";
import Button from "../../Components/Button/";
import InputField from "../../Components/InputField/";
import InputBack from "../../assets/images/voltar.png";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 2. Lógica de envio para o backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Por favor, preencha o e-mail e a senha para fazer login.");
      return;
    }

    try {
      // Faz a requisição POST para a rota de login do backend
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: email,
        password: password,
      });

      console.log("Resposta do servidor:", response.data);
      alert("Login realizado com sucesso!");

      

      // Navega para a página principal após o login bem-sucedido
      navigate("/");

    } catch (error) {
      // Captura e exibe a mensagem de erro vinda do backend ou uma mensagem padrão
      const errorMessage = error.response?.data?.message || "E-mail ou senha incorretos. Tente novamente.";
      console.error("Erro ao fazer login:", error);
      alert(errorMessage);
    }
  };

  return (
    <div className="flex min-h-screen font-sans bg-gray-50">
      <div className="w-full lg:w-1/2 bg-white p-4 md:p-8 lg:p-12 font-medium flex flex-col justify-between">
      <div className="relative pt-4 pl-4 pb-[70px] md:pb-2">
        <a href="/" className="absolute"><img src={InputBack} alt="Voltar" className="h-8 md:h-8 lg:h-8"/></a>
      </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-xl">
            <h1 className="text-4xl md:text-5xl text-gray-800 mb-8 text-left">
              Acesse sua conta
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="E-mail:"
                htmlFor="email"
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-4 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500"
              />
              <InputField
                label="Senha:"
                htmlFor="password"
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua Senha..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-4 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500"
              />
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
                className="text-[20px] text-blue-600 hover:text-blue-800 text-[20px]"
              >
                Esqueci a senha
              </Link>
              <p className="text-[20px] text-gray-600 text-[18px]">
                Não tem uma conta?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-800 font-semibold text-[20px]"
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
            className="h-19 md:h-36 lg:h-24"
          />
          <button className="py-2 px-5 border border-transparent rounded-[4px] shadow-sm text-base md:text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Acesso ONGs
          </button>
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