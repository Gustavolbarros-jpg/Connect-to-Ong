import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Para navegação e dados de rota

import Navbar from "../../Components/Navbar/"; // Ajuste o caminho
import Footer from "../../Components/Footer/"; // Ajuste o caminho
import ProgressBar from "../../Components/ProgressBar"; // Ajuste o caminho
import OngList from "../../Components/OngList"; // Ajuste o caminho
import Button from "../../Components/Button"; // Importa o componente Button

function StepeTwoPage({onLogout}) {
  const navigate = useNavigate();
  const location = useLocation();

  // Recebe os detalhes do projeto da página anterior (StepeOnePage)
  const { projectDetails } = location.state || {};

  // Extrai a área de interesse vinda da Etapa 1 para ser usada como filtro.
  const initialAreaFilter = projectDetails?.areaInterest || "";

  // Estado para armazenar a ID da ONG que o usuário selecionou, iniciando como null
  const [selectedOngId, setSelectedOngId] = useState(null);
  // Estado para armazenar o OBJETO completo da ONG selecionada
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

  // --- ALTERAÇÃO AQUI ---
  // Lógica para o botão "Voltar"
  const handleGoBack = () => {
    // Navega de volta para a primeira etapa, passando o estado atual do formulário
    // para que os campos possam ser repovoados.
    navigate("/stepe-one", { state: { projectDetails } });
  };

  // Lógica para o botão "Continuar"
  const handleContinue = () => {
    // A verificação aqui é redundante se o botão estiver corretamente desativado, mas é uma boa prática mantê-la.
    if (selectedOngId === null) {
      alert("Por favor, selecione uma ONG para continuar com o seu projeto.");
      return;
    }
    console.log('SAINDO DO PASSO 2 -> Dados que serão enviados para o Passo 3:', {
    projectDetails: projectDetails,
    selectedOng: selectedOngDetails,
    });

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
      <Navbar onLogout={onLogout} />

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
              // Passa a área de interesse para o OngList para que ele possa pré-filtrar os resultados.
              initialAreaFilter={initialAreaFilter}
            />

            {/* Exibe o resumo da ONG selecionada acima da lista de busca */}
            {selectedOngDetails && (
              <div className="bg-white rounded-[4px] shadow-md p-4 mb-8 border-2 border-blue-500 mt-5">
                  <h2 className="text-xl font-semibold mb-2">ONG Selecionada:</h2>
                  <p className="text-gray-700">{selectedOngDetails.name} - {selectedOngDetails.description.substring(0, 100)}...</p>
                  <button 
                      className="mt-4 bg-red-500 text-white py-1 px-3 rounded-[4px] text-sm hover:bg-red-600"
                      onClick={() => handleOngSelected(selectedOngDetails)} // Clicar deseleciona
                  >
                      Mudar Seleção
                  </button>
              </div>
            )}

            {/* Botões de Navegação (Voltar e Continuar) */}
            <div className="mt-10 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
              {/* Botão "Voltar" agora usa o componente Button */}
              <Button 
                type="button" 
                onClick={handleGoBack} 
                primary 
                className="w-full sm:w-auto text-[20px]"
              >
                Voltar
              </Button>
              
              {/* Botão "Continuar" agora usa o componente Button */}
              <Button 
                type="button" 
                onClick={handleContinue} 
                primary 
                disabled={selectedOngId === null}
                className="w-full sm:w-auto text-[20px]"
              >
                Continuar
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default StepeTwoPage;
