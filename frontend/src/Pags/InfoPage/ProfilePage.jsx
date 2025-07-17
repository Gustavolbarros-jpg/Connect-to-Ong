import { useState } from "react";
import cameraIcon from "../../assets/images/cameraIcon.png";

import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";

function ProfilePage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [description, setDescription] = useState("");
  const [instition, setInstition] = useState("");

  return (
    <div className="bg-gray-200 font-sans">
      <Navbar />
      <main className="pt-24">
        <section className="relative h-[70vh] flex justify-center">
          <div className="flex p-16 relative translate-x-8 gap-16">
            <div className="bg-white w-[240px] h-[240px] rounded-full flex items-center justify-center">
              <img src={cameraIcon} alt="icone camera" className="w-16" />
            </div>

            <div className="bg-white w-[1398px] flex flex-col items-start justify-start p-8 rounded-[8px] gap-4">
              <div className="flex w-full gap-8">
                <div className="flex-1">
                  <p className="font-sans text-[18px]">Seu Nome Completo:</p>
                  <div className="bg-gray-300 w-full h-[43px] rounded-[8px] flex items-center pl-4">
                    <p className="text-left">{nome} teste nome</p>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-sans text-[18px]">
                    Seu E-mail Institucional
                  </p>
                  <div className="bg-gray-300 w-full h-[43px] rounded-[8px] flex items-center pl-4">
                    <p className="text-left">{email} teste email</p>
                  </div>
                </div>
              </div>

              <div className="flex w-full gap-8">
                <div className="flex-1">
                  <p className="font-sans text-[18px]">Departamento:</p>

                  <div className="bg-gray-300 w-full h-[43px] rounded-[8px] flex items-center pl-4">
                    <p className="text-left">{departamento} teste depto</p>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="font-sans text-[18px]">Nome da Instituição</p>
                  <div className="bg-gray-300 w-full h-[43px] rounded-[8px] flex items-center pl-4">
                    <p className="text-left">{instition} teste Institucional</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-sans text-[18px]">Sua Descrição:</p>
                <div className="bg-gray-300 w-[1330px] h-[142px] rounded-[8px] flex items-center pl-4">
                  <p className="text-left">{description} teste descrição</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ProfilePage;
