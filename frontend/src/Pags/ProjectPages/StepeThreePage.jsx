import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import Button from "../../Components/Button/";

function StepeThreePage() {
  const navigate = useNavigate();
  const location = useLocation();

  // LÓGICA DE CORREÇÃO APLICADA AQUI
  // Garante que 'state' e suas propriedades internas sejam objetos seguros.
  const state = location.state || {};
  const projectDetails = state.projectDetails || {};
  const selectedOng = state.selectedOng || null;

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleConfirm = () => {
    console.log("DADOS FINAIS CONFIRMADOS:", {
      projectDetails,
      selectedOng,
    });
    alert("Projeto confirmado com sucesso!");
    navigate("/");
  };

  const displayData = (data) =>
    data || <span className="text-gray-400">Não informado</span>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Indicador de Etapas */}
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
              <p className="mt-2 text-sm text-gray-600">Conexão com a ONG</p>
            </div>
            <div className="flex-auto border-t-2 border-blue-600 mx-4"></div>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <p className="mt-2 text-sm font-semibold text-blue-600">
                Confirmar projeto
              </p>
            </div>
          </div>

          {/* Card de Resumo */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Resumo do Projeto e Conexão
            </h2>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-4">
                Detalhes do Projeto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Nome do Projeto
                  </p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.nameProject)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Professores atrelados
                  </p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.teacher)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Área de Interesse
                  </p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.areaInterest)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Horas de Extensão
                  </p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.extensionHours)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Soft Skills
                  </p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.softSkills)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Tempo Previsto
                  </p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.expectedTime)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Quantidade de Alunos
                  </p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.numberStudents)}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm font-medium text-gray-500">
                    Descrição do Projeto
                  </p>
                  <p className="text-gray-800 whitespace-pre-wrap">
                    {displayData(projectDetails.descriptionProject)}
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-4">
                ONG Selecionada
              </h3>
              {selectedOng ? (
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-md">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-500"
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
                  <div>
                    <p className="font-bold text-gray-800">
                      {selectedOng.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedOng.category}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">Nenhuma ONG foi selecionada.</p>
              )}
            </div>
            <div className="mt-10 flex justify-between items-center">
              <Button type="button" onClick={handleGoBack} secondary>
                Voltar
              </Button>
              <Button type="button" onClick={handleConfirm} primary>
                Confirmar Tudo
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default StepeThreePage;
