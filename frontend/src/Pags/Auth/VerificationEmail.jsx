import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/images/background-login.png";
import logoRecife from "../../assets/images/logo-recife.png";
import Button from "../../Components/Button/";
import InputField from "../../Components/InputField/";

function RecoverPasswordPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const registeredEmail = "usuario@teste.com";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      alert("Por favor, preencha o e-mail para recuperar sua senha.");
      return;
    }

    if (email.toLowerCase() === registeredEmail) {
      console.log("E-mail correto. Navegando e enviando state...");

      // 👇 AQUI ESTÁ A CORREÇÃO CRÍTICA 👇
      // O segundo argumento { state: ... } deve estar DENTRO do parêntese.
      navigate("/verify-code", { state: { email: email } });
    } else {
      alert("E-mail não encontrado em nosso sistema. Tente novamente.");
    }
  };

  return (
    <div className="flex min-h-screen font-sans bg-gray-50">
      <div className="w-full lg:w-1/2 bg-white p-4 md:p-8 lg:p-12 font-medium flex flex-col justify-between">
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-xl">
            <h1 className="text-4xl md:text-5xl text-gray-800 mb-8 text-left">
              Recupere sua Conta
            </h1>
            <p className="text-gray-600 mb-8">
              Digite "<strong>usuario@teste.com</strong>" para simular um e-mail
              válido.
            </p>
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
              <Button
                type="submit"
                primary
                className="w-full mt-6 text-lg md:text-xl flex justify-center items-center"
              >
                Continuar
              </Button>
            </form>
            <div className="mt-6 text-center space-y-3">
              <Link
                to="/"
                className="text-sm text-blue-600 hover:text-blue-800 text-[20px]"
              >
                Voltar para o Login
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-8 w-full">
          <img
            src={logoRecife}
            alt="Logo Recife Proteção"
            className="h-10 md:h-36 lg:h-24"
          />
        </div>
      </div>
      <div
        className="hidden lg:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
    </div>
  );
}

export default RecoverPasswordPage;
