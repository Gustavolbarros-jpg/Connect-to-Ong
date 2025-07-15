import React from "react";
import footerIcon from "../assets/images/footerIcon.png"; // Atenção ao caminho da imagem

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-12 md:p-16">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-20">
        <div className="flex flex-col items-start">
          <img
            src={footerIcon}
            alt="Logo da Prefeitura do Recife"
            className="w-40"
          />

          <div className="mt-8">
            <h2 className="font-bold text-[24px]">Bora Impactar</h2>
            <p className="mt-2 text-gray-200 leading-tight text-[20px]">
              A união que transforma
              <br />
              vidas
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="font-bold text-[24px]">Portal</h2>

          <div className="flex flex-col items-start mt-4 space-y-3">
            <a href="#" className="text-gray-200 hover:text-white text-[20px]">
              Voluntariado e doação
            </a>
            <a href="#" className="text-gray-200 hover:text-white text-[20px]">
              Doação de Sangue
            </a>
            <a href="#" className="text-gray-200 hover:text-white text-[20px]">
              Imposto de Renda
            </a>
            <a href="#" className="text-gray-200 hover:text-white text-[20px]">
              Área da ONG
            </a>
            <a href="#" className="text-gray-200 hover:text-white text-[20px]">
              Agenda de eventos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
