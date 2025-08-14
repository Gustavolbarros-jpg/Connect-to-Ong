import React from "react";

/**
 * Componente de rodapé com variantes de estilo.
 * @param {object} props
 * @param {string} props.variant - Pode ser 'default' (azul) ou 'white'.
 */
function Footer({ variant = "default" }) {
  // Verifica qual variante está ativa para aplicar as classes corretas
  const isWhite = variant === 'white';

  // Define as classes condicionais com base na variante
  const footerClasses = isWhite ? 'bg-[#F4F0F0] text-[#001449]' : 'bg-blue-600 text-white';
  const paragraphClasses = isWhite ? 'text-gray-600' : 'text-gray-200';
  const linkClasses = isWhite ? 'text-gray-600 hover:text-[#001449]' : 'text-gray-200 hover:text-white';
  const iconContainerClasses = isWhite ? 'bg-blue-600 p-1 rounded-[10px]' : '';

  return (
    <footer className={`${footerClasses} p-12 md:p-16`}>
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-20">
        <div className="flex flex-col items-start">
          {/* O container do ícone agora tem classes condicionais para o fundo */}
          <div className={iconContainerClasses}>
            <div className="w-40 h-20 bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
              LOGO
            </div>
          </div>

          <div className="mt-8">
            {/* A cor do heading é herdada do 'footerClasses' */}
            <h2 className="font-bold text-[24px]">Bora Impactar</h2>
            <p className={`mt-2 ${paragraphClasses} leading-tight text-[20px]`}>
              A união que transforma
              <br />
              vidas
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="font-bold text-[24px]">Portal</h2>

          <div className="flex flex-col items-start mt-4 space-y-3">
            <a href="https://boraimpactar.recife.pe.gov.br/" target="_blank" className={`${linkClasses} text-[20px]`}>
              Voluntariado e doação
            </a>
            <a href="https://boraimpactar.recife.pe.gov.br/blood_donations" target="_blank" className={`${linkClasses} text-[20px]`}>
              Doação de Sangue
            </a>
            <a href="https://boraimpactar.recife.pe.gov.br/income_tax" target="_blank" className={`${linkClasses} text-[20px]`}>
              Imposto de Renda
            </a>
            <a href="https://boraimpactar.recife.pe.gov.br/ngos" target="_blank" className={`${linkClasses} text-[20px]`}>
              Área da ONG
            </a>
            <a href="https://boraimpactar.recife.pe.gov.br/events" target="_blank" className={`${linkClasses} text-[20px]`}>
              Agenda de eventos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;