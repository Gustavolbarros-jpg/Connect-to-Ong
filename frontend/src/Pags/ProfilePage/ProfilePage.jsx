import { useState } from "react";
import cameraIcon from "../../assets/images/cameraIcon.png";

import Button from "../../Components/Button/";
import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import ProjectsSection from "./ProjectsSection";

function ProfilePage() {
  const [nome, setNome] = useState("Seu Nome Completo");
  const [email, setEmail] = useState("seu.email@institucional.com");
  const [departamento, setDepartamento] = useState("Departamento de Exemplo");
  const [description, setDescription] = useState(
    "Uma breve descrição sobre você..."
  );
  const [instituicao, setInstituicao] = useState("Nome da Instituição");
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(cameraIcon);

  const handleSaveProfile = async () => {
    console.log("Salvando dados...");
    const userProfile = {
      nome,
      email,
      departamento,
      descricao: description,
      instituicao,
      profileImage,
    };
    setIsEditing(false);
    alert("Perfil salvo com sucesso!");
  };

  const handleImageChange = () => {
    if (!isEditing) return;

    const newImageUrl = window.prompt(
      "Cole a URL da sua nova foto de perfil:",
      ""
    );
    if (newImageUrl) {
      setProfileImage(newImageUrl);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(cameraIcon);
  };

  return (
    <div className="bg-gray-200 font-sans">
      <Navbar />
      <main className="pt-24 pb-24">
        <section className="relative flex justify-center items-center border-b-4 border-gray-400">
          <div className="flex p-16 relative translate-x-8 gap-16 items-center">
            <div className="flex flex-col items-center gap-4 w-[240px]">
              <div
                className={`bg-white w-[240px] h-[240px] rounded-full flex items-center justify-center transition-colors ${
                  isEditing
                    ? "cursor-pointer hover:bg-gray-100"
                    : "cursor-default"
                }`}
                onClick={handleImageChange}
                title={
                  isEditing
                    ? "Clique para alterar a foto"
                    : "Clique em 'Editar Perfil' para poder alterar a foto"
                }
              >
                <img
                  src={profileImage}
                  alt="Foto de perfil"
                  className={
                    profileImage === cameraIcon
                      ? "w-16"
                      : "w-full h-full object-cover rounded-full"
                  }
                />
              </div>
              {isEditing && (
                <Button onClick={handleRemoveImage} primary>
                  Remover Foto
                </Button>
              )}
            </div>

            <div className="bg-white w-[1398px] min-h-[483px] flex flex-col p-8 rounded-[8px] gap-4">
              <div className="flex w-full gap-8">
                <div className="flex-1">
                  <p className="font-sans text-[18px]">Seu Nome Completo:</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="bg-white w-full h-[43px] rounded-[8px] px-4 border-2 border-gray-300 outline-none focus:border-blue-500"
                    />
                  ) : (
                    <div className="bg-gray-300 w-full h-[43px] rounded-[8px] flex items-center px-4">
                      <p>{nome}</p>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-sans text-[18px]">
                    Seu E-mail Institucional
                  </p>
                  {isEditing ? (
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white w-full h-[43px] rounded-[8px] px-4 border-2 border-gray-300 outline-none focus:border-blue-500"
                    />
                  ) : (
                    <div className="bg-gray-300 w-full h-[43px] rounded-[8px] flex items-center px-4">
                      <p>{email}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex w-full gap-8">
                <div className="flex-1">
                  <p className="font-sans text-[18px]">Departamento:</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={departamento}
                      onChange={(e) => setDepartamento(e.target.value)}
                      className="bg-white w-full h-[43px] rounded-[8px] px-4 border-2 border-gray-300 outline-none focus:border-blue-500"
                    />
                  ) : (
                    <div className="bg-gray-300 w-full h-[43px] rounded-[8px] flex items-center px-4">
                      <p>{departamento}</p>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-sans text-[18px]">Nome da Instituição</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={instituicao}
                      onChange={(e) => setInstituicao(e.target.value)}
                      className="bg-white w-full h-[43px] rounded-[8px] px-4 border-2 border-gray-300 outline-none focus:border-blue-500"
                    />
                  ) : (
                    <div className="bg-gray-300 w-full h-[43px] rounded-[8px] flex items-center px-4">
                      <p>{instituicao}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full">
                <p className="font-sans text-[18px]">Sua Descrição:</p>
                {isEditing ? (
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-white w-full min-h-[142px] rounded-[8px] p-4 border-2 border-gray-300 outline-none focus:border-blue-500"
                  />
                ) : (
                  <div className="bg-gray-300 w-full min-h-[142px] rounded-[8px] p-4">
                    <p className="whitespace-pre-wrap">{description}</p>
                  </div>
                )}
              </div>

              <div className="w-full flex justify-end mt-4">
                {isEditing ? (
                  <Button onClick={handleSaveProfile} primary>
                    Salvar Alterações
                  </Button>
                ) : (
                  <Button onClick={() => setIsEditing(true)} primary>
                    Editar Perfil
                  </Button>
                )}
              </div>
            </div>
            <div className="bg-black w-[18px]"></div>
          </div>
        </section>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default ProfilePage;
