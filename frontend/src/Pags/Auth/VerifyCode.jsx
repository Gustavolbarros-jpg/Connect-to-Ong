import React from "react";
import { useLocation } from "react-router-dom";

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
          <div className="h-20 w-32 bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-sm">
            LOGO
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[65%] flex items-center justify-center p-8 lg:p-0">
        <div className="w-full h-auto max-w-4xl bg-gray-200 flex items-center justify-center">
          <div className="text-gray-500 text-2xl">Avião de Papel</div>
        </div>
      </div>
    </div>
  );
}

export default VerifyCode;
