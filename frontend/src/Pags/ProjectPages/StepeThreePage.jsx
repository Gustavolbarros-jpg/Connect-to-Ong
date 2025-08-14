import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiClient from "../../api/tokenInterceptor";
import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import Button from "../../Components/Button/";
import ProgressBar from "../../Components/ProgressBar";
import Modal from "../../Components/Modal";

function StepeThreePage({ onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  console.log('CHEGANDO NO PASSO 3 -> location.state recebido:', location.state);
  const state = location.state || {};
  const projectDetails = state.projectDetails || {};
  const selectedOng = state.selectedOng || null;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGoBack = () => navigate(-1);
  const handleOpenConfirmModal = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleConfirm = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Você precisa estar logado para criar um projeto");
        navigate("/login");
        return;
      }
      
      // -- AQUI ESTÁ A ÚNICA MUDANÇA NECESSÁRIA --
      // Os campos agora são lidos usando os nomes corrigidos (snake_case)
      const projectData = {
        nome_projeto: projectDetails.nome_projeto,
        area_interesse: projectDetails.area_interesse,
        soft_skills: projectDetails.soft_skills,
        quantidade_alunos: projectDetails.quantidade_alunos,
        descricao_projeto: projectDetails.descricao_projeto,
        professores_atrelados: projectDetails.professores_atrelados,
        horas_extensao: projectDetails.horas_extensao,
        tempo_previsto: projectDetails.tempo_previsto,
        data_inicio: projectDetails.data_inicio, // Adicionado
        data_fim: projectDetails.data_fim,     // Adicionado
        ong_selecionada: selectedOng?.id  || null,
        categoria_ong: selectedOng?.area || null,
      };

      console.log("Enviando dados para o backend:", projectData);

      const response = await apiClient.post("/projects", projectData);

      console.log("Resposta do backend:", response.data);
      alert("Projeto criado com sucesso!");
      navigate("/profile");
    } catch (error) {
      console.error("Erro ao criar projeto:", error);
      alert("Erro ao criar projeto. Tente novamente.");
    } finally {
      handleModalClose();
    }
  };

  const displayData = (data) =>
    data || <span className="text-gray-400">Não informado</span>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar onLogout={onLogout} />
      <main className="flex-grow container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-4xl mx-auto">
          <ProgressBar currentStep={3} totalSteps={3} />

          <div className="bg-white p-6 md:p-8 rounded-[4px] shadow-md mt-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
              Resumo do Projeto e Conexão
            </h2>

            {/* Detalhes do Projeto com FLEXBOX */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#001449] mb-4">
                Detalhes do Projeto
              </h3>
              {/* O contêiner agora usa Flexbox */}
              <div className="flex flex-wrap -mx-4 text-sm md:text-base">
                <div className="w-full sm:w-1/2 px-4 mb-4">
                  <p className="font-medium text-gray-500">Nome do Projeto</p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.nome_projeto)}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-4">
                  <p className="font-medium text-gray-500">
                    Professores atrelados
                  </p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.professores_atrelados)}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-4">
                  <p className="font-medium text-gray-500">Área de Interesse</p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.area_interesse)}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-4">
                  <p className="font-medium text-gray-500">Horas de Extensão</p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.horas_extensao)}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-4">
                  <p className="font-medium text-gray-500">Soft Skills</p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.soft_skills)}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-4">
                  <p className="font-medium text-gray-500">Tempo Previsto</p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.tempo_previsto)} meses
                  </p>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-4">
                  <p className="font-medium text-gray-500">
                    Quantidade de Alunos
                  </p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.quantidade_alunos)}
                  </p>
                </div>
                {/* Este item ocupa a largura total */}
                <div className="w-full px-4 mb-4">
                  <p className="font-medium text-gray-500">
                    Descrição do Projeto
                  </p>
                  <p className="text-gray-800 whitespace-pre-wrap break-words">
                    {displayData(projectDetails.descricao_projeto)}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-4">
                  <p className="font-medium text-gray-500">
                    Data de Início
                  </p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.data_inicio)}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-4">
                  <p className="font-medium text-gray-500">
                    Data de Conclusão
                  </p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.data_fim)}
                  </p>
                </div>
              </div>
            </div>

            {/* ONG Selecionada */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold text-[#001449] mb-4">
                ONG Selecionada
              </h3>
              {selectedOng ? (
                <div className="flex items-center gap-4 bg-blue-100 p-4 rounded-[4px]">
                  <img
                    src={selectedOng.logo || "/logo-ong-placeholder.png"}
                    alt={`Logo da ${selectedOng.name}`}
                    className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-800">
                      {selectedOng.name}
                    </p>
                    <p className="text-sm text-gray-600">{selectedOng.area}</p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">Nenhuma ONG foi selecionada.</p>
              )}
            </div>

            {/* Botões de Navegação */}
            <div className="mt-10 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
              <Button
                type="button"
                onClick={handleGoBack}
                primary
                className="w-full sm:w-auto text-[20px]"
              >
                Voltar
              </Button>
              <Button
                type="button"
                onClick={handleOpenConfirmModal}
                primary
                className="w-full sm:w-auto text-[20px]"
              >
                Confirmar Tudo
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Modal de Confirmação */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onContinue={handleConfirm}
        continueText="Sim, Confirmar"
      >
        <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">
          Confirmação Final
        </h2>
        <p className="text-gray-700 text-base">
          Você tem certeza que deseja confirmar o projeto com a ONG "
          {selectedOng?.name}"? Após a confirmação, a ONG será notificada.
        </p>
      </Modal>
    </div>
  );
}

export default StepeThreePage;
