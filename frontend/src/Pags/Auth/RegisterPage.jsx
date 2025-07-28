import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importe o componente Link
import apiClient from '../../api/tokenInterceptor'; 
import logoRecife from "../../assets/images/logo-recife.png";
import Button from "../../Components/Button/";
import InputField from "../../Components/InputField/";
import InputBack from "../../assets/images/voltar.png";

function RegisterPage() {
  const [projectName, setProjectName] = useState("");
  const [institutionalEmail, setInstitutionalEmail] = useState("");
  const [institutionalName, setInstitutionalName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
  event.preventDefault();

  if (
    !projectName ||
    !institutionalEmail ||
    !institutionalName ||
    !password ||
    !confirmPassword
  ) {
    alert("Por favor, preencha todos os campos do formulário.");
    return;
  }

  if (password !== confirmPassword) {
    alert("As senhas não coincidem. Por favor, digite novamente.");
    return;
  }

  try {
    
    const response = await apiClient.post('/auth/signup', {
      fullname: projectName,        // Mapeando: frontend(projectName) -> backend(fullname)
      email: institutionalEmail,    // Mapeando: frontend(institutionalEmail) -> backend(email)
      institution: institutionalName,
      password: password,           // 'password' já corresponde
      // O campo 'institutionalName' não é esperado pelo backend, então não é enviado.
    });

    console.log("Resposta do servidor:", response.data);
    alert(response.data.message); // Exibe a mensagem de sucesso do backend

  } catch (error) {
    // Exibe a mensagem de erro que vem do backend
    const errorMessage = error.response?.data?.message || "Ocorreu um erro durante o cadastro.";
    console.error("Erro ao cadastrar:", errorMessage);
    alert(errorMessage);
  }
};


  return (
    <div className="min-h-screen bg-white text-white font-roboto flex flex-col items-center text-[20px]">
      <div className="realtive w-full flex justify-between items-center p-6 lg:p-8">
        <a href="/" className="absolute mb-[12px] md:mb-[20px]"><img src={InputBack} alt="Voltar" className="h-8 md:h-8 lg:h-8"/></a>
        <div className="flex items-center space-x-4 ml-auto">
          <span className="text-gray-800 text-[20px]">Já tem uma conta?</span>{" "}
          <Link to="/login">
            <Button primary className="py-2 px-6 text-[20px]">
              Acessar
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center w-full ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Cadastre-se
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4 text-[20px]">
          <InputField
            label="Nome do Responsável do Projeto"
            htmlFor="projectName"
            type="text"
            id="projectName"
            name="projectName"
            placeholder="Digite seu nome..."
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 text-[20px] py-3 text-gray-800"
            labelClassName="text-gray-300"
          />
          <InputField
            label="E-mail Institucional"
            htmlFor="institutionalEmail"
            type="email"
            id="institutionalEmail"
            name="institutionalEmail"
            placeholder="Digite seu E-mail..."
            value={institutionalEmail}
            onChange={(e) => setInstitutionalEmail(e.target.value)}
            className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 text-[20px] py-3 text-gray-800"
            labelClassName="text-gray-300"
          />
          <InputField
            label="Nome da Instituição de Ensino"
            htmlFor="institutionName"
            type="text"
            id="institutionName"
            name="institutionName"
            placeholder="Digite o nome da instituição de ensino..."
            value={institutionalName}
            onChange={(e) => setInstitutionalName(e.target.value)}
            className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 text-[20px] py-3 text-gray-800"
            labelClassName="text-gray-300"
          />

          <InputField
            label="Senha"
            htmlFor="password"
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 text-[20px] py-3 text-gray-800"
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
            className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 text-[20px] py-3 text-gray-800"
            labelClassName="text-gray-300"
          />
          <Button
            type="submit"
            primary
            className="w-full mt-6 py-3 text-[20px] flex justify-center items-center"
          >
            Continuar
          </Button>
        </form>
      </div>
      <div className="w-full flex justify-between items-end p-4 lg:p-4 mt-auto">
        <img src={logoRecife} alt="Logo Recife" className="h-12 md:h-36" />
        <Button primary className="py-2 px-5">
          Cadastre sua ONG
        </Button>
      </div>
    </div>
  );
}

export default RegisterPage;