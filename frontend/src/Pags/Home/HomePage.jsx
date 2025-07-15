import React from "react";
// Importações de imagens que a HomePage ainda usa
import fotoMain from "../../assets/images/foto-main.png";
import comunicationIcon from "../../assets/images/comunicationIcon.png";
import empathyIcon from "../../assets/images/empathyIcon.png";
import colaborationIcon from "../../assets/images/colaborationIcon.png";
import registerIcon from "../../assets/images/registerIcon.png";
import conectionIcon from "../../assets/images/conectionIcon.png";
import resultsIcon from "../../assets/images/resultsIcon.png";

import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";

function HomePage() {
  return (
    <div className="bg-white font-sans">
      <Navbar />
      <main className="pt-24">
        <section className="relative h-[70vh]">
          <img
            src={fotoMain}
            alt="foto da main"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 h-full flex items-center bg-gradient-to-r from-[#001449BF] via-[#1A3A8FBF] via-[50%]">
            <div className="container mx-auto px-6 text-white">
              <div className="max-w-xl">
                <h1 className="text-[48px] font-bold leading-tight">
                  Conecte-se a ONGs e transforme sua pesquisa em impacto social.
                </h1>
                <p className="mt-5 text-[30px] text-gray-200">
                  Conectamos universidades e ONGs em projetos sociais que
                  desenvolvem soft skills e geram impacto real. A plataforma
                  facilita parcerias com foco em aprendizado prático e
                  transformação social.
                </p>
                <a
                  href="/register"
                  className="mt-8 inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-md hover:bg-gray-200 text-[25px]"
                >
                  Começar projeto agora!
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative min-h-[60vh] bg-blue-600 py-16">
          <div>
            <h1 className="text-blue-950 font-semibold text-[62px] text-center">
              Soluções de <span className="text-white">soft skills</span>{" "}
              fortalecem competências.
            </h1>
            <div className="flex justify-center items-start space-x-12 mt-20">
              <div className="w-[580px] h-[283px] bg-white rounded-[8px] p-8 shadow-lg">
                <img
                  src={comunicationIcon}
                  alt="icone comunicação "
                  className="mt-4 w-16"
                />
                <h2 className="font-sans text-[28px] text-left mt-4 text-gray-800">
                  Comunicação
                </h2>
                <p className="font-sans text-[22px] text-left text-gray-800">
                  É a capacidade de transmitir e receber informações de forma
                  clara, objetiva e respeitosa.
                </p>
              </div>

              <div className="w-[580px] h-[283px] bg-white rounded-[8px] p-8 shadow-lg">
                <img
                  src={empathyIcon}
                  alt="icone empatia"
                  className="mt-4 w-16"
                />
                <h2 className="font-sans text-[28px] text-left mt-4 text-gray-800">
                  Empatia
                </h2>
                <p className="font-sans text-[22px] text-left text-gray-800">
                  É a habilidade de se colocar no lugar do outro, compreendendo
                  seus sentimentos e perspectivas.
                </p>
              </div>
              <div className="w-[580px] h-[283px] bg-white rounded-[8px] p-8 shadow-lg">
                <img
                  src={colaborationIcon}
                  alt="icone empatia"
                  className="mt-4 w-16"
                />
                <h2 className="font-sans text-[28px] text-left mt-4 text-gray-800">
                  Colaboração
                </h2>
                <p className="font-sans text-[20px] text-left text-gray-800">
                  Refere-se à capacidade de trabalhar bem em equipe,
                  contribuindo com ideias, respeitando diferentes opiniões e
                  buscando objetivos comuns.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative min-h-[80vh] bg-white py-16">
          <h1 className="text-blue-950 font-semibold text-[62px] text-center">
            Como Funciona?
          </h1>

          <div className="flex justify-center items-start space-x-48 mt-20">
            <div className="flex flex-col items-center space-y-8">
              <div className="w-72 h-72 bg-blue-600 rounded-full flex justify-center items-center shadow-lg">
                <img
                  src={registerIcon}
                  alt="icone cadastro"
                  className="items-center w-36 relative translate-x-2"
                />
              </div>
              <div>
                <h2 className="font-sans text-blue-950 text-[48px] text-center">
                  Cadastro
                </h2>
                <p className="font-sans text-blue-950 text-[28px] text-center">
                  Universidades se registram com seus <br></br>interesses e
                  áreas de atuação.
                </p>
              </div>
            </div>
            <div className=" flex flex-col items-center">
              <div className="w-72 h-72 bg-blue-600 rounded-full flex justify-center items-center shadow-lg">
                <img
                  src={conectionIcon}
                  alt="icone comunicação"
                  className="items-center w-36 relative translate-x-2"
                />
              </div>
              <div>
                <h2 className="font-sans text-blue-950 text-[48px] text-center">
                  Conexão
                </h2>
                <p className=" font-sans text-blue-950 text-[28px] text-center">
                  A plataforma cruza os dados e sugere <br></br>parcerias
                  ideais.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-72 h-72 bg-blue-600 rounded-full flex justify-center items-center shadow-lg">
                <img
                  src={resultsIcon}
                  alt="icone resultados"
                  className="items-center w-36 relative translate-x-2"
                />
              </div>
              <div>
                <h2 className="font-sans text-blue-950 text-[48px] text-center">
                  Resultados
                </h2>
                <p className="font-sans text-blue-950 text-[28px] text-center">
                  Projetos finalizados geram certificados e <br></br>impacto
                  real na comunidade.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
