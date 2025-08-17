// src/Components/OngCard.jsx
import React, { useState } from "react";

// O componente agora também aceita a prop 'isSelected' para controle visual
function OngCard({
  ong,
  showActionButton,
  actionButtonText,
  onActionClick,
  isSelected,
}) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Constantes para controle da descrição
  const DESCRIPTION_LIMIT = 200;
  const shortDescription = ong.description.substring(0, DESCRIPTION_LIMIT);
  const needsExpansion = ong.description.length > DESCRIPTION_LIMIT;

  // Função para expandir/recolher a descrição
  const toggleDescriptionExpansion = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  // Função para o clique no botão de ação
  const handleActionClick = (e) => {
    // Impede que o clique no botão se propague para o card pai
    e.stopPropagation();

    // Chama a função passada pelo componente pai (ex: para abrir modal ou selecionar)
    if (onActionClick) {
      onActionClick(ong);
    }
  };

  return (
    // O card agora tem uma borda condicional baseada na prop 'isSelected'
    <div
      className={`bg-white rounded-[4px] shadow-md p-6 flex flex-col justify-between h-auto border-2 transition-all duration-300 ${
        isSelected
          ? "border-blue-600 shadow-blue-200"
          : "border-transparent hover:shadow-xl"
      }`}
      onClick={toggleDescriptionExpansion} // Clicar no card expande a descrição
    >
      {/* Seção Superior: Logo, Nome e Subtítulo/Área */}
      <section className="flex items-center mb-4">
        <img
          src={ong.logo || "/logo-ong-placeholder.png"}
          alt={`Logo da ${ong.name}`}
          className="w-16 h-16 rounded-full mr-4 flex-shrink-0 object-cover"
        />
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 leading-tight">
            {ong.name}
          </h3>
          <p className="text-md text-gray-500 mt-1 leading-tight">{`Área: ${ong.area}`}</p>
        </div>
      </section>

      {/* Seção da Descrição Principal */}
      <section className="cursor-pointer">
        <p className="text-gray-600 text-base mb-4 flex-grow">
          {isDescriptionExpanded ? ong.description : shortDescription}
          {needsExpansion && (
            <span className="text-blue-600 hover:underline ml-1 font-semibold">
              {isDescriptionExpanded ? "ver menos" : "...ver mais"}
            </span>
          )}
        </p>
      </section>

      {/* Seção Inferior: Tags e Botão de Ação */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-auto pt-4">
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
          {ong.location && (
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              📍 {ong.location} {/* Mostra o endereço completo */}
            </span>
          )}
        </div>

        {showActionButton && (
          <div className="w-full sm:w-auto">
            <button
              onClick={handleActionClick}
              disabled={isSelected} // Desabilita o botão se já estiver selecionado
              className={`w-full sm:w-auto bg-blue-600 text-white font-semibold py-2 px-5 rounded-[4px] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                isSelected
                  ? "bg-green-500 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              {/* O texto do botão muda se o card estiver selecionado */}
              {isSelected ? "Selecionado" : actionButtonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OngCard;
