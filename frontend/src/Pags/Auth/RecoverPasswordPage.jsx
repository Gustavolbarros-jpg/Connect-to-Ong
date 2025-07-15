import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/";
import InputField from "../../Components/InputField/";
import logoRecife from "../../assets/images/logo-recife.png";

function RecoverPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!password || !confirmPassword) {
      alert("Por favor, preencha a nova senha e a confirmação.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem. Tente novamente.");
      return;
    }

    console.log("Senha alterada com sucesso!");
    alert("Senha alterada com sucesso!");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white text-white font-sans flex flex-col items-center">
      <div className="w-full flex justify-between items-center p-6 lg:p-8"></div>
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Redefinir sua senha
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
          <InputField
            label="Senha"
            htmlFor="password"
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 text-[18px] py-3 text-gray-800"
            labelClassName="text-gray-300"
          />
          <InputField
            label="Confirme a Senha"
            htmlFor="confirmPassword"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirme a sua senha..."
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
            Redefinir
          </Button>
        </form>
      </div>
      <div className="w-full flex justify-between items-end p-4 lg:p-4 mt-auto">
        <img src={logoRecife} alt="Logo Recife" className="h-12 md:h-36" />
      </div>
    </div>
  );
}

export default RecoverPasswordPage;
