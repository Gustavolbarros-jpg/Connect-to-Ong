import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Para navegação e dados de rota

import Navbar from "../../Components/Navbar/"; // Ajuste o caminho
import Footer from "../../Components/Footer/"; // Ajuste o caminho
import ProgressBar from "../../Components/ProgressBar"; // Ajuste o caminho

// Importe o novo componente OngList
import OngList from "../../Components/OngList"; // Ajuste o caminho

// Você pode remover os mockOngs daqui, pois OngList gerencia a própria busca
// const mockOngs = [ ... ]; 

function StepeTwoPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Recebe os detalhes do projeto da página anterior (StepeOnePage)
  const { projectDetails } = location.state || {};

  // Estado para armazenar a ID da ONG que o usuário selecionou
  const [selectedOngId, setSelectedOngId] = useState(null);
  // Estado para armazenar o OBJETO completo da ONG selecionada (útil para passar adiante)
  const [selectedOngDetails, setSelectedOngDetails] = useState(null);


  // Função chamada quando o botão "Selecionar" de um OngCard é clicado
  const handleOngSelected = (ong) => {
    // Se a ONG clicada já for a selecionada, deseleciona
    if (selectedOngId === ong.id) {
      setSelectedOngId(null);
      setSelectedOngDetails(null);
    } else {
      // Senão, seleciona a nova ONG
      setSelectedOngId(ong.id);
      setSelectedOngDetails(ong); // Salva os detalhes completos da ONG
      // Opcional: rolar para o topo da página para ver a ONG selecionada
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  // Lógica para o botão "Voltar"
  const handleGoBack = () => {
    navigate(-1); // Volta para a página anterior no histórico
  };

  // Lógica para o botão "Continuar"
  const handleContinue = () => {
    if (!selectedOngId) {
      alert("Por favor, selecione uma ONG para continuar com o seu projeto.");
      return;
    }

    // Navega para a próxima etapa, passando os detalhes do projeto e a ONG selecionada
    navigate("/stepe-three", {
      state: {
        projectDetails: projectDetails, // Detalhes do projeto da StepeOnePage
        selectedOng: selectedOngDetails, // Detalhes da ONG selecionada nesta etapa
      },
    });
  };

  return (
    // Contêiner principal da página
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar /> {/* Renderiza a Navbar */}

      {/* Conteúdo principal da página */}
      <main className="flex-grow container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Barra de Progresso do Cadastro */}
          <ProgressBar currentStep={2} totalSteps={3} /> {/* Ajuste o currentStep conforme esta seja a segunda etapa */}

          <div className="mt-8">

            <OngList
              showActionButton={true}
              actionButtonText="Selecionar"
              onActionClick={handleOngSelected}
              selectedOngId={selectedOngId}
            />

            {/* Exibe o resumo da ONG selecionada acima da lista de busca */}
            {selectedOngDetails && (
              <div className="bg-white rounded-lg shadow-md p-4 mb-8 border-2 border-blue-500">
                  <h2 className="text-xl font-semibold mb-2">ONG Selecionada:</h2>
                  <p className="text-gray-700">{selectedOngDetails.name} - {selectedOngDetails.description.substring(0, 80)}...</p>
                  <button 
                      className="mt-4 bg-red-500 text-white py-1 px-3 rounded text-sm hover:bg-red-600"
                      onClick={() => handleOngSelected(selectedOngDetails)} // Clicar deseleciona
                  >
                      Mudar Seleção
                  </button>
              </div>
            )}

            {/* Botões de Navegação (Voltar e Continuar) */}
            <div className="mt-10 flex justify-between items-center">
              <button
                onClick={handleGoBack}
                className="bg-blue-600 text-white text-[20px] py-2 px-5 rounded-[4px] hover:bg-blue-800"
              >
                Voltar
              </button>
              <button
                onClick={handleContinue}
                className={`bg-blue-600 text-white text-[20px] py-2 px-5 rounded-[4px] hover:bg-blue-800 ${!selectedOngId ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!selectedOngId} // Desabilita se nenhuma ONG estiver selecionada
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default StepeTwoPage;