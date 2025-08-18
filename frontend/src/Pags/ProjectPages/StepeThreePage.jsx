import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiClient from "../../api/tokenInterceptor";
import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import Button from "../../Components/Button/";
import ProgressBar from "../../Components/ProgressBar";
import Modal from "../../Components/Modal";
import StatusSpinner from "../../Components/StatusSpinner";

function StepeThreePage({ onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state || {};
  const projectDetails = state.projectDetails || {};
  const selectedOng = state.selectedOng || null;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionState, setSubmissionState] = useState("idle");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleGoBack = () => navigate(-1);
  const handleOpenConfirmModal = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleConfirm = async () => {
    handleModalClose();
    setSubmissionState("loading");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const projectData = {
        nome_projeto: projectDetails.nome_projeto,
        area_interesse: projectDetails.area_interesse,
        soft_skills: projectDetails.soft_skills,
        quantidade_alunos: projectDetails.quantidade_alunos,
        descricao_projeto: projectDetails.descricao_projeto,
        professores_atrelados: projectDetails.professores_atrelados,
        horas_extensao: projectDetails.horas_extensao,
        tempo_previsto: projectDetails.tempo_previsto,
        data_inicio: projectDetails.data_inicio,
        data_fim: projectDetails.data_fim,
        ong_selecionada: selectedOng?.id || null,
        categoria_ong: selectedOng?.area || null,
      };

      await apiClient.post("/projects", projectData);

      setSubmissionState("success");

      setTimeout(() => {
        setIsSuccessModalOpen(true);
      }, 1500);
    } catch (error) {
      console.error("Erro ao criar projeto:", error);
      setSubmissionState("error");
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

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-[#001449] mb-4">
                Detalhes do Projeto
              </h3>
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
                <div className="w-full px-4 mb-4">
                  <p className="font-medium text-gray-500">
                    Descrição do Projeto
                  </p>
                  <p className="text-gray-800 whitespace-pre-wrap break-words">
                    {displayData(projectDetails.descricao_projeto)}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-4">
                  <p className="font-medium text-gray-500">Data de Início</p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.data_inicio)}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-4">
                  <p className="font-medium text-gray-500">Data de Conclusão</p>
                  <p className="text-gray-800">
                    {displayData(projectDetails.data_fim)}
                  </p>
                </div>
              </div>
            </div>

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

      {(submissionState === "loading" || submissionState === "success") && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <StatusSpinner status={submissionState} />
        </div>
      )}

      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => navigate("/dashboard")}
        onContinue={() => navigate("/dashboard")}
        continueText="Ir para Meus Projetos"
      >
        <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-4">
          Projeto Criado com Sucesso!
        </h2>
        <p className="text-gray-700 text-base">
          Sua conexão com a ONG "{selectedOng?.name}" foi iniciada. Você pode
          acompanhar o status do seu projeto no seu DashBoard
        </p>
      </Modal>

      <Modal
        isOpen={submissionState === "error"}
        onClose={() => setSubmissionState("idle")}
        onContinue={() => setSubmissionState("idle")}
        continueText="Tentar Novamente"
      >
        <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
          Ocorreu um Erro
        </h2>
        <p className="text-gray-700 text-base">
          Não foi possível criar o seu projeto. Por favor, verifique sua conexão
          e tente novamente.
        </p>
      </Modal>

      <Footer />

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
