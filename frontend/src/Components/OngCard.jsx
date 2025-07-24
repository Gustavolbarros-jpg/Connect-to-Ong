import React, { useState } from 'react';

function OngCard({ ong }) {

  // Estado para controlar se a descrição está expandida ou não
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // Define um limite para a descrição antes de ser expandida
  const DESCRIPTION_LIMIT = 150; 
  const shortDescription = ong.description.substring(0, DESCRIPTION_LIMIT);
  const needsExpansion = ong.description.length > DESCRIPTION_LIMIT;

  // Função para alternar o estado de expansão
  const toggleDescriptionExpansion = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-auto">

      {/* Seção Superior: Logo, Nome e Subtítulo/Área */}

      <div className="flex items-center mb-4">
        <img src={ong.logo || '/logo-ong-placeholder.png'} alt={`Logo da ${ong.name}`} className="w-16 h-16 rounded-full mr-4 flex-shrink-0"/>
        <div className="flex flex-col">
          <h3 className="text-[20px] font-bold text-gray-800 leading-tight">{ong.name}</h3>
          <p className="text-[16px] text-gray-500 mt-1 leading-tight">{ong.subtitle || `Área: ${ong.area}`}</p>
        </div>
      </div>

      {/* Seção da Descrição Principal - CLICÁVEL PARA EXPANDIR */}

      <p className="text-gray-600 text-base mb-4 flex-grow cursor-pointer" onClick={toggleDescriptionExpansion}>{isDescriptionExpanded ? ong.description : shortDescription}{needsExpansion && (<span className="text-blue-600 hover:underline ml-1">{isDescriptionExpanded ? '...ver menos' : '...ver mais'}</span>)}</p>

      {/* Seção das Tags (Área de Atuação, Localidade, Tipo de Projeto) */}

      <div className="flex flex-wrap gap-2 mb-4">
        {ong.location && (<span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{ong.location}</span>)}
        {ong.area && (<span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{ong.area}</span>)}
        
        {/* Renderiza tags adicionais se houver no objeto ong */}
        {ong.tags && ong.tags.map((tag, index) => (<span mkey={index}className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>))}
      </div>
      
    </div>
  );
}

export default OngCard;