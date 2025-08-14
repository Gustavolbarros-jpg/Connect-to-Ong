import React from "react";
import StatusBadge from "./StatusBadge";
import ProjectDetailPanel from "./ProjectDetailPanel"; // NOVO: Importa o painel de detalhes

// Ícones que vamos usar
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);
const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12H4"
    />
  </svg>
);

// ALTERADO: A assinatura do componente mudou
function ProjectListItem({ project, isOpen, onToggleDetails }) {
  const cellStyle = "text-gray-700 text-base";
  const headerStyle = "text-gray-400 text-lg";

  return (
    // O container agora agrupa a linha principal e o painel de detalhes
    <div className="border-b border-gray-200 last:border-b-0">
      <div
        className="flex items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => onToggleDetails(project.id)}
      >
        <div className="w-3/12 pr-4">
          <p className={headerStyle}>Nome do Projeto</p>
          <p className={cellStyle}>{project.name}</p>
        </div>
        <div className="w-3/12 pr-4">
          <p className={headerStyle}>Ong Parceira</p>
          <p className={cellStyle}>{project.ong}</p>
        </div>
        <div className="w-4/12 pr-4">
          <p className={headerStyle}>Universidade</p>
          <p className={cellStyle}>{project.university}</p>
        </div>
        <div className="w-2/12">
          <p className={headerStyle}>Status</p>
          <StatusBadge status={project.status} />
        </div>
        <div className="ml-auto flex-shrink-0">
          <div className="bg-blue-600 text-white rounded-md w-9 h-9 flex items-center justify-center">
            {/* NOVO: O ícone muda dependendo se está aberto ou fechado */}
            {isOpen ? <MinusIcon /> : <PlusIcon />}
          </div>
        </div>
      </div>

      {/* NOVO: Container para o painel de detalhes com animação */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {/* O painel de detalhes é renderizado aqui */}
        <ProjectDetailPanel project={project} />
      </div>
    </div>
  );
}

export default ProjectListItem;
