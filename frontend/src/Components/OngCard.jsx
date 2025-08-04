import React, { useState } from 'react';

function OngCard({ ong, onCardClick }) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const handleClick = (e) => {
        e.stopPropagation();
        onCardClick();
    };

    return (
        <div 
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-auto cursor-pointer"
            onClick={toggleExpansion}
        >
            {/* Seção Superior: Logo, Nome e Subtítulo/Área */}
            <div className="flex items-center mb-4">
                <img 
                    src={ong.logo || '/logo-ong-placeholder.png'} 
                    alt={`Logo da ${ong.name}`} 
                    className="w-16 h-16 rounded-full mr-4 flex-shrink-0"
                />
                <div className="flex flex-col">
                    <h3 className="text-[20px] font-bold text-gray-800 leading-tight">{ong.name}</h3>
                    <p className="text-[16px] text-gray-500 mt-1 leading-tight">Área: {ong.area}</p>
                </div>
            </div>

            {/* Seção da Descrição Principal */}
            <p className="text-gray-600 text-base mb-4 flex-grow">
                {isExpanded ? ong.description : `${ong.description.substring(0, 300)}${ong.description.length > 300 ? '...' : ''}`}
                {ong.description.length > 300 && (
                    <span className="text-blue-600 hover:underline ml-1">
                        {isExpanded ? 'ver menos' : 'ver mais'}
                    </span>
                )}
            </p>

            {/* Seção das Tags (Área de Atuação, Localidade) */}
            <div className="flex flex-wrap gap-2 mb-4 mt-[40px]">
                {ong.location && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {ong.location}
                    </span>
                )}
                {ong.area && (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {ong.area}
                    </span>
                )}
            </div>
        </div>
    );
}

export default OngCard;