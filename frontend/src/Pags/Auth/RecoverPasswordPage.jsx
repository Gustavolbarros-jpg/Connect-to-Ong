import React, { useState } from "react";
// 1. Imports necessários do React Router e Axios
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../../api/tokenInterceptor";
import Button from "../../Components/Button.jsx";
import InputField from "../../Components/InputField.jsx";

function RecoverPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // 2. Pega o "token" da URL (ex: /recover-password/SEUTOKENAQUI)
  const { token } = useParams();

  // 3. Transforma a função em async para esperar a resposta do backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!password || !confirmPassword) {
      alert("Por favor, preencha a nova senha e a confirmação.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem. Tente novamente.");
      return;
    }
    
    if (!token) {
        alert("Token de redefinição não encontrado. Por favor, use o link do seu e-mail.");
        return;
    }

    // 4. Lógica de envio para o backend dentro de um bloco try...catch
    try {
      // 5. Requisição POST para a rota de reset do backend
      //    Enviamos o token na URL e a nova senha no corpo da requisição
      const response = await apiClient.post(`/auth/reset-password/${token}`, {
        password: password,
      });

      // Se a requisição for bem-sucedida
      console.log(response.data.message);
      alert("Senha alterada com sucesso! Você já pode fazer login.");
      navigate("/"); // Redireciona para a página de login

    } catch (error) {
      // Se ocorrer um erro (token inválido, expirado, etc.)
      const errorMessage = error.response?.data?.message || "Não foi possível redefinir a senha. Tente novamente.";
      console.error("Erro ao redefinir senha:", error);
      alert(errorMessage);
    }
  };

  // O seu JSX permanece o mesmo
  return (
    <div className="min-h-screen bg-white text-white font-sans flex flex-col items-center">
      <div className="w-full flex justify-between items-center p-6 lg:p-8"></div>
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Redefinir sua senha
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
          <InputField
            label="Nova Senha"
            htmlFor="password"
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua nova senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 text-[18px] py-3 text-gray-800"
            labelClassName="text-gray-300"
          />
          <InputField
            label="Confirme a Nova Senha"
            htmlFor="confirmPassword"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirme a sua nova senha..."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 text-[18px] py-3 text-gray-800"
            labelClassName="text-gray-300"
          />
          <Button
            type="submit"
            primary
            className="w-full mt-6 py-3 text-lg flex justify-center items-center"
          >
            Redefinir Senha
          </Button>
        </form>
      </div>
      <div className="w-full flex justify-between items-end p-4 lg:p-4 mt-auto">
        <div className="h-12 md:h-36 w-32 bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-sm">
          LOGO
        </div>
      </div>
    </div>
  );
}

export default RecoverPasswordPage;