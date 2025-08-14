import React, { useState } from "react";
import Button from "../../Components/Button/";
import { useNavigate } from "react-router-dom";

function ProjectsSection() {
  // 1. INICIALIZE O HOOK AQUI
  const navigate = useNavigate();

  const [projects, setProjects] = useState([
    {
      id: 1,
      nome: "Conexões",
      status: "Em Espera",
      ong: "Grupo Paz e Amor",
      universidade: "Universidade Federal de Pernambuco",
    },

    {
      id: 2,
      nome: "Horta Comunitária",
      status: "Ativo",
      ong: "Mãos na Terra",
      universidade: "Universidade de Pernambuco",
    },
  ]);

  // 2. CHAME A FUNÇÃO 'navigate' AQUI
  const handleCreateProject = () => {
    navigate("/stepe-one");
  };

  const handleViewProject = (id) => {
    alert(`Visualizar detalhes do projeto com ID: ${id}`);
  };

  const getStatusTag = (status) => {
    switch (status.toLowerCase()) {
      case "ativo":
        return "bg-green-100 text-green-800";
      case "em espera":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Seus Projetos</h1>
        <Button onClick={handleCreateProject} primary className="text-[20px] font-semibold px-5">
          Criar Projeto
        </Button>
      </div>
      <div>
        <div className="space-y-3">
          <div className="hidden md:flex items-center px-4 text-2xl font-semibold text-gray-500">
            <div className="w-3/12">Nome do projeto</div>
            <div className="w-2/12">Status</div>
            <div className="w-3/12">ONGs Parceira</div>
            <div className="w-3/12">Universidade</div>
            <div className="w-1/12 text-right">Ação</div>
          </div>

          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-200"
            >
              <div className="w-3/12 font-medium text-[18px] text-gray-900">
                {project.nome}
              </div>
              <div className="w-2/12">
                <span
                  className={`px-3 py-1 text-[18px] font-medium rounded-full ${getStatusTag(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
              <div className="w-3/12 text-gray-600 text-[18px]">
                {project.ong}
              </div>
              <div className="w-3/12 text-gray-600 text-[18px]">
                {project.universidade}
              </div>
              <div className="w-1/12 flex justify-end">
                <button
                  onClick={() => handleViewProject(project.id)}
                  className="bg-blue-600 text-white w-8 h-8 rounded-md flex items-center justify-center text-xl font-bold hover:bg-blue-700"
                  title="Ver detalhes"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;