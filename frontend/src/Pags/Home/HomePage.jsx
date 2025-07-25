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
    <div className="bg-white font-roboto">
      <Navbar />
      <main className="pt-24 min-w-screem">
        <section className="relative h-[95vh] w-full">
          <img
            src={fotoMain}
            alt="foto da main"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 h-full flex items-center bg-gradient-to-r from-[#001449BF] via-[#1A3A8FBF] via-[50%] font-roboto">
            <div className="container ml-12 md:mb-[140px] text-white">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight w-100%">
                  Conecte-se a ONGs e transforme sua pesquisa em impacto social.
                </h1>
                <p className="mt-5 text-xl text-gray-200 w-[600px] ">
                  Conectamos universidades e ONGs em projetos sociais que
                  desenvolvem soft skills e geram impacto real.
                </p>
                <button className="w-[200px] h-[60px] bg-[#1474FF] font-bold focus:outline-none rounded-[4px] hover:bg-blue-600 mt-[24px]">
                  <a href="/register">Começar projeto agora!</a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-600 py-16 px-4">
          <h1 className="text-blue-950 font-semibold text-4xl md:text-5xl text-center">
            Soluções de <span className="text-white">soft skills</span>{" "}
            fortalecem competências.
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-16 max-w-[1500px] mx-auto">
            {/* Card 1 */}
            <div className="w-full bg-white rounded-lg p-8 shadow-lg">
              <img
                src={comunicationIcon}
                alt="icone comunicação"
                className="w-16"
              />
              <h2 className="text-2xl font-bold mt-4 text-gray-800">
                Comunicação
              </h2>
              <p className="text-lg mt-2 text-gray-700">
                É a capacidade de transmitir e receber informações de forma
                clara, objetiva e respeitosa.
              </p>
            </div>

            <div className="w-full bg-white rounded-lg p-8 shadow-lg">
              <img src={empathyIcon} alt="icone empatia" className="w-16" />
              <h2 className="text-2xl font-bold mt-4 text-gray-800">Empatia</h2>
              <p className="text-lg mt-2 text-gray-700">
                É a habilidade de se colocar no lugar do outro, compreendendo
                seus sentimentos e perspectivas.
              </p>
            </div>

            <div className="w-full bg-white rounded-lg p-8 shadow-lg">
              <img
                src={colaborationIcon}
                alt="icone colaboração"
                className="w-16"
              />
              <h2 className="text-2xl font-bold mt-4 text-gray-800">
                Colaboração
              </h2>
              <p className="text-lg mt-2 text-gray-700">
                Refere-se à capacidade de trabalhar bem em equipe, contribuindo
                com ideias, respeitando diferentes opiniões e buscando objetivos
                comuns.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 px-4 w-full">
          <h1 className="text-blue-950 font-semibold text-4xl md:text-5xl text-center">
            Como Funciona?
          </h1>

          <div className="flex flex-col container md:flex-row justify-center items-start gap-12 lg:gap-20 mt-20 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-60 h-60 bg-blue-600 rounded-full flex justify-center items-center shadow-lg">
                <img src={registerIcon} alt="icone cadastro" className="w-32" />
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold text-blue-950">Cadastro</h2>
                <p className="text-xl text-blue-950 mt-2 max-w-xs mx-auto">
                  Universidades se registram com seus interesses e áreas de
                  atuação.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-60 h-60 bg-blue-600 rounded-full flex justify-center items-center shadow-lg">
                <img src={conectionIcon} alt="icone conexão" className="w-32" />
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold text-blue-950">Conexão</h2>
                <p className="text-xl text-blue-950 mt-2 max-w-xs mx-auto">
                  A plataforma cruza os dados e sugere parcerias ideais.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-60 h-60 bg-blue-600 rounded-full flex justify-center items-center shadow-lg">
                <img
                  src={resultsIcon}
                  alt="icone resultados"
                  className="w-32"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold text-blue-950">Resultados</h2>
                <p className="text-xl text-blue-950 mt-2 max-w-xs mx-auto">
                  Projetos finalizados geram certificados e impacto real na
                  comunidade.
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
