import React from "react";

function StatusBadge({ status }) {
  let badgeColorClasses = "";

  switch (status) {
    case "Concluído":
      badgeColorClasses = "bg-green-100 text-green-800";
      break;
    case "Em Andamento":
      badgeColorClasses = "bg-yellow-100 text-yellow-800";
      break;
    case "Aguardando Conexão":
      badgeColorClasses = "bg-blue-100 text-blue-800";
      break;
    default:
      badgeColorClasses = "bg-gray-100 text-gray-800";
  }

  const finalClasses = `inline-block px-2.5 py-0.5 rounded-full text-base font-semibold ${badgeColorClasses}`;

  return <span className={finalClasses}>{status}</span>;
}

export default StatusBadge;
