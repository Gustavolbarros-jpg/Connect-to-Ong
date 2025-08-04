import React, { useState } from "react";

import BGImage from "../../assets/images/InfoPage/BGImage.png";
import imageSection from "../../assets/images/InfoPage/imageSection.png";
import icone1 from "../../assets/images/InfoPage/icone1.png";
import icone2 from "../../assets/images/InfoPage/icone2.png";
import icone3 from "../../assets/images/InfoPage/icone3.png";

import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";

function InfoPage() {
  return (
    <div className="font-roboto h-screen text-[#001449]">
      <Navbar />
      <main className="min-h-screen min-w-screem bg-[#F4F0F0]">
        <section
          className="flex justify-start items-center // text-white // w-full h-screen bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url('${BGImage}')` }} >
          <div className="relative z-10 h-full w-full max-w-[1500px] flex items-center bg-gradient-to-r from-[#001449BF] via-[#1A3A8FBF] via-[80%] font-roboto">
            <div className="flex-column // w-full max-w-[700px] pl-12">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight pb-4">
                Potencialize a Extensão da sua Universidade.
              </h1>
              <p className="text-xl pb-6">
                Nossa plataforma conecta seus cursos e alunos a projetos de ONGs, criando oportunidades de aprendizado prático e pesquisa aplicada.
              </p>
              <button className="w-[200px] h-[60px] bg-[#1474FF] font-bold focus:outline-none rounded-[4px] hover:bg-blue-600">
                <a href="/register">Quero Participar!</a>
              </button>
            </div>
          </div>
        </section>

        <section className="w-full h-[590px] bg-[#F4F0F0] flex flex-col items-center justify-center py-10 px-4">
          <h2 className="text-[30px] md:text-[40px] font-bold text-center mb-10 md:mb-12">
            Nosso Propósito
          </h2>

          <div className="flex flex-col space-y-8 max-w-lg md:max-w-xl w-full text-[18px] md:text-[20px]">
            <div className="flex gap-4 text-[18px] md:text-[20px]">
              <img
                src={icone1}
                alt="Ícone correntes"
                className="w-12 h-12"
              />
              <p>
                Aproximar a universidade da realidade social, por meio de
                parcerias com ONGs.
              </p>
            </div>
            <div className="flex gap-4 text-[18px] md:text-[20px]">
              <img
                src={icone2}
                alt="Ícone globo"
                className="w-12 h-12"
              />
              <p>
                Gerar impacto social mútuo, beneficiando tanto as ONGs quanto a
                formação dos alunos.
              </p>
            </div>
            <div className="flex gap-4 text-[18px] md:text-[20px]">
              <img
                src={icone3}
                alt="Ícone ponte"
                className="w-12 h-12"
              />
              <p>
                Criar pontes entre educação e impacto social, aproximando
                universitários de causas relevantes.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full h-[700px] bg-[#1474FF] flex items-center justify-center">
          <div className="container flex flex-col items-center justify-center gap-8 md:h-full md:flex-row md:items-center md:gap-12">
            <div className="w-full md:w-1/2 flex justify-center md:justify-center">
              <img
                src={imageSection}
                alt="Universidades e ONGs colaborando"
                className="w-full max-w-sm md:max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="w-full text-white text-center justify-cente md:w-1/2 md:text-start">
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
      <Footer />
    </div>
  );
}

export default InfoPage;