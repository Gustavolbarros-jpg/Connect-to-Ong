import React from "react";
// 1. Importar o hook useNavigate do react-router-dom
import { useNavigate } from "react-router-dom";

import BGImage from "../../assets/images/InfoPage/BGImage.png";
import imageSection from "../../assets/images/InfoPage/imageSection.png";
import icone1 from "../../assets/images/InfoPage/icone1.png";
import icone2 from "../../assets/images/InfoPage/icone2.png";
import icone3 from "../../assets/images/InfoPage/icone3.png";

import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";

function InfoPage() {
  // 2. Inicializar o hook para obter a função de navegação
  const navigate = useNavigate();

  // 3. Criar a função que será chamada no clique do botão
  const handleParticipateClick = () => {
    // Verifica se existe um 'token' ou 'user' no localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // Se estiver logado, navega para a página de criar projeto
      navigate("/stepe-one");
    } else {
      // Se não estiver logado, navega para a página de login
      navigate("/login");
    }
  };

  return (
    <div className="font-roboto h-screen text-[#001449]">
      <Navbar />
      <main className="min-h-screen min-w-screen bg-[#F4F0F0]">
        <section
          className="flex justify-start items-center text-white w-full h-screen bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url('${BGImage}')` }}
        >
          <div className="relative z-10 h-full w-full max-w-[1500px] flex items-center bg-gradient-to-r from-[#001449BF] via-[#1A3A8FBF] via-[80%] font-roboto">
            <div className="flex-column w-full max-w-[700px] pl-12">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight pb-4">
                Potencialize a Extensão da sua Universidade.
              </h1>
              <p className="text-xl pb-6">
                Nossa plataforma conecta seus cursos e alunos a projetos de
                ONGs, criando oportunidades de aprendizado prático e pesquisa
                aplicada.
              </p>

              <button
                onClick={handleParticipateClick}
                className="py-3 px-5 text-[20px] bg-[#1474FF] font-semibold focus:outline-none rounded-[4px] hover:bg-blue-600 text-white"
              >
                Quero Participar!
              </button>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#F4F0F0] flex flex-col items-center justify-center py-16 px-4">
          <h2 className="text-[30px] md:text-[40px] font-bold text-center mb-10 md:mb-12">
            Nosso Propósito
          </h2>

          <div className="flex flex-col gap-8 max-w-lg md:max-w-xl w-full text-[18px] md:text-[20px]">
            <div className="flex items-center gap-4">
              <img
                src={icone1}
                alt="Ícone correntes"
                className="w-12 h-12 flex-shrink-0"
              />
              <p>
                Aproximar a universidade da realidade social, por meio de
                parcerias com ONGs.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={icone2}
                alt="Ícone globo"
                className="w-12 h-12 flex-shrink-0"
              />
              <p>
                Gerar impacto social mútuo, beneficiando tanto as ONGs quanto a
                formação dos alunos.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={icone3}
                alt="Ícone ponte"
                className="w-12 h-12 flex-shrink-0"
              />
              <p>
                Criar pontes entre educação e impacto social, aproximando
                universitários de causas relevantes.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-blue-600 flex items-center justify-center p-8 md:py-16">
          <div className="container mx-auto flex flex-col items-center justify-center gap-8 md:flex-row md:items-center md:gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={imageSection}
                alt="Universidades e ONGs colaborando"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="w-full text-white text-center md:text-start md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Como as universidades participam?
              </h2>
              <p className="text-lg md:text-xl">
                A universidade pode explorar projetos de ONGs, escolher onde
                colaborar e oferecer apoio com pesquisa, voluntariado ou
                conhecimento técnico. Também pode propor novas iniciativas e
                criar parcerias que gerem impacto social real.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="white" />
    </div>
  );
}

export default InfoPage;