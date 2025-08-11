import React from "react";

// Os títulos das etapas são definidos aqui para fácil manutenção.
const steps = [
  { title: "Detalhes do Projeto" },
  { title: "Selecione a ONG" },
  { title: "Revisão e Envio" },
];

/**
 * Um componente de barra de progresso visual para formulários de várias etapas.
 * @param {object} props
 * @param {number} props.currentStep - A etapa atual (1-indexed, ou seja, 1, 2, 3...).
 * @param {number} props.totalSteps - O número total de etapas a serem exibidas.
 */
function ProgressBar({ currentStep, totalSteps }) {
  const stepsToRender = steps.slice(0, totalSteps || steps.length);
  const progressWidth = totalSteps > 1 ? ((currentStep - 1) / (totalSteps - 1)) * 100 : 0;

  return (
    <section className="w-full max-w-4xl mx-auto my-8 px-4 md:px-0 pb-4">
      <div className="relative flex justify-between items-center">
        
        {/* Linha de Fundo (Cinza) */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 transform -translate-y-1/2"></div>
        
        {/* Linha de Progresso (Azul) */}
        <div 
          className="absolute top-1/2 left-0 h-1 bg-blue-600 transform -translate-y-1/2 transition-all duration-500 ease-in-out"
          style={{ width: `${progressWidth}%` }}
        ></div>

        {/* Círculos e Títulos das Etapas */}
        {stepsToRender.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <div key={index} className="relative flex flex-col items-center z-10">
              <div
                className={`
                  w-10 h-10 rounded-full border-4 flex items-center justify-center font-bold text-lg
                  transition-all duration-300
                  ${isCompleted
                      ? "bg-blue-600 border-blue-600 text-white"
                      : isActive
                      ? "bg-white border-blue-600 text-blue-600 scale-110"
                      : "bg-white border-gray-300 text-gray-400"
                  }
                `}
              >
                {/* Se a etapa estiver concluída, mostra o ícone de visto. Senão, mostra o número. */}
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                ) : (
                  <span>{stepNumber}</span>
                )}
              </div>

              <p className={`
                absolute top-full mt-3 text-center text-xs sm:text-sm whitespace-nowrap
                transition-colors duration-300
                ${isActive || isCompleted ? "text-gray-800 font-semibold" : "text-gray-500"}
              `}>
                {step.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProgressBar;
