import React, { useState } from "react"; // NOVO: Importa o useState
import ProjectListItem from "./ProjectListItem";

function ProjectList({ title, projects }) {
  // NOVO: Estado para controlar qual projeto está aberto (guardando seu ID)
  const [openProjectId, setOpenProjectId] = useState(null);

  // NOVO: Função para abrir/fechar o item
  const handleToggleDetails = (projectId) => {
    // Se o projeto clicado já estiver aberto, feche-o (definindo o ID como nulo).
    // Caso contrário, abra o projeto clicado.
    setOpenProjectId((prevId) => (prevId === projectId ? null : projectId));
  };

  return (
    <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <div>
        {projects.map((project, index) => (
          <ProjectListItem
            key={project.id}
            project={project}
            // ALTERADO: Passa novas props para o item da lista
            isOpen={openProjectId === project.id}
            onToggleDetails={handleToggleDetails}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
