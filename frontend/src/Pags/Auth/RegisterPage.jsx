import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importe useNavigate
import apiClient from '../../api/tokenInterceptor'; 
import logoRecife from "../../assets/images/logo-recife.png";
import Button from "../../Components/Button/";
import InputField from "../../Components/InputField/";
import InputBack from "../../assets/images/voltar.png";

function RegisterPage() {
  const navigate = useNavigate(); // Hook para navegação

  // Estados para os dados do formulário e para os erros
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    institution: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  // Função genérica para atualizar o estado do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    // Limpa o erro do campo quando o utilizador começa a corrigir
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };
  
  // Função para validar todos os campos do formulário
  const validateForm = () => {
    const newErrors = {};

    // Validação do Nome Completo (pelo menos duas palavras)
    if (!formData.fullname.trim() || !/\s/.test(formData.fullname.trim())) {
      newErrors.fullname = "Por favor, insira o seu nome completo.";
    }
    
    // Validação do E-mail (formato válido)
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Por favor, insira um endereço de e-mail válido.";
    }

    // Validação do Nome da Instituição
    if (!formData.institution.trim()) {
      newErrors.institution = "O nome da instituição é obrigatório.";
    }

    // Validação da Senha (mínimo 8 caracteres, com letras e números)
    if (formData.password.length < 8 || !/\d/.test(formData.password) || !/[a-zA-Z]/.test(formData.password)) {
      newErrors.password = "A senha deve ter no mínimo 8 caracteres, incluindo letras e números.";
    }

    // Validação da Confirmação de Senha
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem.";
    }
    
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return; // Impede o envio se houver erros
    }

    try {
      const response = await apiClient.post('/auth/signup', {
        fullname: formData.fullname,
        email: formData.email,
        institution: formData.institution,
        password: formData.password,
      });

      console.log("Resposta do servidor:", response.data);
      alert(response.data.message || "Cadastro realizado com sucesso!");
      navigate('/login'); // Redireciona para a página de login após o sucesso

    } catch (error) {
      const errorMessage = error.response?.data?.message || "Ocorreu um erro durante o cadastro.";
      console.error("Erro ao cadastrar:", errorMessage);
      alert(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-white text-white font-roboto flex flex-col items-center text-base md:text-lg">
      <div className="w-full flex justify-between items-center p-4 md:p-6 lg:p-8">
        <Link to="/" className="z-10">
          <img src={InputBack} alt="Voltar" className="h-8"/>
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4 ml-auto">
          <span className="text-gray-800 text-sm md:text-base">Já tem uma conta?</span>
          <Link to="/login">
            <Button primary className="py-2 px-4 md:px-6 font-semibold text-[20px]">
              Acessar
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center w-full px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Cadastre-se
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
          <div>
            <InputField
              label="Nome do Responsável do Projeto"
              name="fullname"
              type="text"
              placeholder="Digite seu nome completo..."
              value={formData.fullname}
              onChange={handleChange}
              className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 py-3 text-gray-800"
              labelClassName="text-gray-800"
            />
            {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>}
          </div>
          <div>
            <InputField
              label="E-mail Institucional"
              name="email"
              type="email"
              placeholder="Digite seu e-mail..."
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 py-3 text-gray-800"
              labelClassName="text-gray-800"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <InputField
              label="Nome da Instituição de Ensino"
              name="institution"
              type="text"
              placeholder="Digite o nome da instituição..."
              value={formData.institution}
              onChange={handleChange}
              className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 py-3 text-gray-800"
              labelClassName="text-gray-800"
            />
            {errors.institution && <p className="text-red-500 text-sm mt-1">{errors.institution}</p>}
          </div>
          <div>
            <InputField
              label="Senha"
              name="password"
              type="password"
              placeholder="Digite sua senha..."
              value={formData.password}
              onChange={handleChange}
              className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 py-3 text-gray-800"
              labelClassName="text-gray-800"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div>
            <InputField
              label="Confirme a Senha"
              name="confirmPassword"
              type="password"
              placeholder="Confirme a sua senha..."
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border-2 border-blue-600 placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500 py-3 text-gray-800"
              labelClassName="text-gray-800"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>
          <Button
            type="submit"
            primary
            className="w-full mt-6 py-3 font-semibold text-[20px] flex justify-center items-center"
          >
            Continuar
          </Button>
        </form>
      </div>

      <div className="w-full flex justify-between items-end p-4 mt-auto">
        <img src={logoRecife} alt="Logo Recife" className="h-12 md:h-24" />
        <Link to="/register-ong"> {/* Adicione o link correto para o cadastro de ONG */}
            <Button primary className="py-2 px-4 font-semibold text-[20px] md:text-base">
              Cadastre sua ONG
            </Button>
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;