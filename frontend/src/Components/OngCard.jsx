// src/components/OngCard.jsx
import React, { useState } from 'react';

// Aceita showActionButton, actionButtonText, onActionClick E isSelected (NOVO!)
function OngCard({ ong, showActionButton, actionButtonText, onActionClick, isSelected }) {

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const DESCRIPTION_LIMIT = 200;
  const shortDescription = ong.description.substring(0, DESCRIPTION_LIMIT);
  const needsExpansion = ong.description.length > DESCRIPTION_LIMIT;

  const toggleDescriptionExpansion = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-auto border-2 ${isSelected ? "border-blue-600" : "border-transparent"}`}>

      {/* Seção Superior: Logo, Nome e Subtítulo/Área */}
      <section className="flex items-center mb-4">
        <img
          src={ong.logo || '/logo-ong-placeholder.png'}
          alt={`Logo da ${ong.name}`}
          className="w-16 h-16 rounded-full mr-4 flex-shrink-0"
        />
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 leading-tight">{ong.name}</h3>
          <p className="text-[18px] text-gray-500 mt-1 leading-tight">{ong.subtitle || `Área: ${ong.area}`}</p>
        </div>
      </section>



      {/* Seção da Descrição Principal - CLICÁVEL PARA EXPANDIR */}
      <section>
        <p
          className="text-gray-600 text-[20px] mb-4 flex-grow cursor-pointer"
          onClick={toggleDescriptionExpansion}
        >
          {isDescriptionExpanded ? ong.description : shortDescription}
          {needsExpansion && (
            <span className="text-blue-600 hover:underline ml-1">
              {isDescriptionExpanded ? 'ver menos' : '...ver mais'}
            </span>
          )}
        </p>
      </section>


      {/* Seção das Tags */}
      <section className="flex justify-between mb-4 mt-[30px]">
        <div className="flex flex-wrap gap-2 mt-[8px] md:mt-[12px] h-4">

            {ong.location && (
          <span className="bg-blue-100 text-blue-800 text-[14px] font-semibold px-2.5 py-0.5 rounded-full">
            {ong.location}
          </span>
        )}
        {ong.area && (
          <span className="bg-green-100 text-green-800 text-[14px] font-semibold px-2.5 py-0.5 rounded-full">
            {ong.area}
          </span>
        )}
        </div>
        <div>
          {showActionButton && (
          <div className="flex justify-end mt-auto">
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={() => onActionClick && onActionClick(ong)} // Chama a função passada, passando a ONG
            >
              {/* Texto do botão muda se o card está selecionado */}
              {isSelected ? "Selecionado" : actionButtonText} {/* <<-- MUDANÇA AQUI */}
            </button>
          </div>
        )}
        </div>
      </section>


    </div>
  );
}

export default OngCard;