import React from "react";

// Componente auxiliar para não repetir código
const DetailRow = ({ label, value }) => (
  <div className="py-2">
    <p className="text-sm font-semibold text-gray-500">{label}</p>
    <p className="text-md text-gray-800">
      {Array.isArray(value) ? value.join(", ") : value}
    </p>
  </div>
);

function ProjectDetailPanel({ project }) {
  return (
    // O painel tem um fundo levemente diferente e padding
    <div className="bg-slate-50 p-6">
      <p className="text-md text-gray-700 mb-6">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-gray-200 pt-4">
        <div>
          <DetailRow
            label="Soft Skill Desenvolvida"
            value={project.softSkill}
          />
          <DetailRow label="Área de Interesse" value={project.interestArea} />
          <DetailRow
            label="Quantidade de Alunos"
            value={project.studentCount}
          />
        </div>
        <div>
          <DetailRow label="Professores Atrelados" value={project.professors} />
          <DetailRow
            label="Horas de Extensão"
            value={`${project.extensionHours} horas`}
          />
          <DetailRow
            label="Datas"
            value={`${project.startDate} a ${project.endDate}`}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPanel;
