import React, { useState } from "react";
// 1. Adicione 'useLocation' para receber os dados da página anterior
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import Button from "../../Components/Button/";

function StepeTwoPage() {
  const navigate = useNavigate();
  const location = useLocation(); // Hook para ler os dados que vieram na navegação

  // 2. Recebe os dados da Etapa 1
  const { projectDetails } = location.state || {};

  const mockOngs = [
    {
      id: 1,
      name: "Grupo Paz e Amor",
      category: "Desenvolvimento Sustentável",
      description: "Desde 1987...",
      tags: ["Barris", "Esportes", "Terceira idade"],
    },
    {
      id: 2,
      name: "Crescer e Aprender",
      category: "Educação Infantil",
      description: "Oferecemos reforço escolar...",
      tags: ["Boa Viagem", "Crianças", "Educação"],
    },
    {
      id: 3,
      name: "Mar Verde",
      category: "Meio Ambiente",
      description: "Atuamos na limpeza de praias...",
      tags: ["Pina", "Meio Ambiente", "Voluntariado"],
    },
    {
      id: 4,
      name: "Mãos que Ajudam",
      category: "Assistência Social",
      description: "Distribuição de cestas básicas...",
      tags: ["Recife Antigo", "Social", "Famílias"],
    },
  ];

  const [selectedOngId, setSelectedOngId] = useState(null);

  const handleGoBack = () => {
    navigate(-1);
  };

  // 3. Função 'handleContinue' corrigida
  const handleContinue = () => {
    if (!selectedOngId) {
      alert("Por favor, selecione uma ONG para continuar.");
      return;
    }

    // Encontra o objeto completo da ONG que foi selecionada
    const selectedOng = mockOngs.find((ong) => ong.id === selectedOngId);

    // Navega para a Etapa 3, enviando os dados do projeto E a ONG selecionada
    navigate("/stepe-three", {
      state: {
        projectDetails: projectDetails, // Dados que vieram da Etapa 1
        selectedOng: selectedOng, // Dados selecionados na Etapa 2
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* O restante do seu código JSX permanece o mesmo */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p className="mt-2 text-sm text-gray-600">Detalhes do Projeto</p>
            </div>
            <div className="flex-auto border-t-2 border-blue-600 mx-4"></div>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <p className="mt-2 text-sm font-semibold text-blue-600">
                Conexão com a ONG
              </p>
            </div>
            <div className="flex-auto border-t-2 border-gray-300 mx-4"></div>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold">
                3
              </div>
              <p className="mt-2 text-sm text-gray-500">Confirmar projeto</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Você tem interesse em uma ONG específica, pesquise aqui..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <select className="col-span-1 md:col-span-1 border border-gray-300 rounded-md p-2 text-gray-700">
                <option>Área de atuação</option>
              </select>
              <select className="col-span-1 md:col-span-1 border border-gray-300 rounded-md p-2 text-gray-700">
                <option>Local</option>
              </select>
              <select className="col-span-1 md:col-span-1 border border-gray-300 rounded-md p-2 text-gray-700">
                <option>Categoria</option>
              </select>
              <select className="col-span-1 md:col-span-1 border border-gray-300 rounded-md p-2 text-gray-700">
                <option>Tipo de Projeto</option>
              </select>
              <button className="col-span-1 text-sm text-gray-600 hover:text-gray-900">
                Remover Filtros
              </button>
              <Button type="button" className="col-span-1">
                Filtrar
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            {mockOngs.map((ong) => (
              <div
                key={ong.id}
                className={`bg-white p-6 rounded-lg shadow-md border-2 ${
                  selectedOngId === ong.id
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800">
                      {ong.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{ong.category}</p>
                    <p className="text-gray-700 mb-4">{ong.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {ong.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-full sm:w-auto">
                    <Button
                      type="button"
                      onClick={() => setSelectedOngId(ong.id)}
                      primary
                    >
                      {selectedOngId === ong.id ? "Selecionado" : "Conecte-se"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-8 space-x-1">
            <button className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-200">
              {"<"}
            </button>
            <button className="px-3 py-1 rounded-md bg-blue-600 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-200">
              2
            </button>
            <button className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-200">
              {">"}
            </button>
          </div>
          <div className="mt-10 flex justify-between items-center">
            <Button type="button" onClick={handleGoBack} primary>
              Voltar
            </Button>
            {/* 4. Removido o 'href' do botão */}
            <Button type="button" primary onClick={handleContinue}>
              Continuar
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default StepeTwoPage;
