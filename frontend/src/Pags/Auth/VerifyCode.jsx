import React from "react";
import { useLocation } from "react-router-dom";
import logoRecife from "../../assets/images/logo-recife.png";
import aviaodepapel from "../../assets/images/aviaodepapel.png";

function VerifyCode() {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans bg-gray-50">
      <div className="w-full lg:w-[35%] flex flex-col p-8 lg:p-16">
        <div className="flex-grow flex items-center ml-[18px]">
          <div>
            {" "}
            <h1 className="text-4xl lg:text-5xl text-gray-800 mb-4">
              Enviamos um link de redefinição de senha para o e-mail:{" "}
              <span className="font-bold">{email}</span>
            </h1>
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 mt-10">
              Instruções:
            </h3>
            <ul className="text-xl lg:text-2xl list-disc list-inside space-y-2 text-gray-700">
              <li>Abra seu aplicativo de e-mail.</li>
              <li>
                Procure por uma mensagem de{" "}
                <span className="font-semibold">Connect to Ong</span>.
              </li>
              <li>Clique no link para criar uma nova senha.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <img src={logoRecife} alt="Logo Recife Proteção" className="h-20" />
        </div>
      </div>
      <div className="w-full lg:w-[65%] flex items-center justify-center p-8 lg:p-0">
        <img
          src={aviaodepapel}
          alt="Avião de Papel"
          className="w-full h-auto max-w-4xl"
        />
      </div>
    </div>
  );
}

export default VerifyCode;
