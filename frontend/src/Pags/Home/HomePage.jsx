import { Link } from "react-router-dom"; // <-- MUDANÇA 1: Importação adicionada
import { motion } from "framer-motion";

import fotoMain from "../../assets/images/foto-main.png";
import comunicationIcon from "../../assets/images/comunicationIcon.png";
import empathyIcon from "../../assets/images/empathyIcon.png";
import colaborationIcon from "../../assets/images/colaborationIcon.png";
import registerIcon from "../../assets/images/registerIcon.png";
import conectionIcon from "../../assets/images/conectionIcon.png";
import resultsIcon from "../../assets/images/resultsIcon.png";

import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";

function HomePage({ onLogout }) {
  return (
    <div className="bg-white font-roboto">
      <Navbar onLogout={onLogout} />
      <main className="pt-24 min-w-screem">
        {/* SEÇÃO HERO */}
        <section className="relative h-[95vh] w-full">
          <img
            src={fotoMain}
            alt="foto da main"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 h-full flex items-center bg-gradient-to-r from-[#001449BF] via-[#1A3A8FBF] via-[50%] font-roboto">
            <div className="container ml-12 md:mb-[140px] text-white">
              <div className="max-w-3xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold leading-tight w-100%"
                >
                  Conecte-se a ONGs e transforme sua pesquisa em impacto social.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-5 text-xl text-gray-200 w-[600px] "
                >
                  Conectamos universidades e ONGs em projetos sociais que
                  desenvolvem soft skills e geram impacto real.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* v MUDANÇA 2: <a> foi trocado por <Link> e href por to v */}
                  <Link to="/login">
                    <button className="py-3 px-5 text-[20px] bg-blue-600 font-semibold focus:outline-none rounded-[4px] hover:bg-blue-800 mt-[24px] transition-colors duration-300">
                      Começar projeto agora!
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO SOFT SKILLS */}
        <section className="bg-blue-600 py-16 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-blue-950 font-semibold text-4xl md:text-5xl text-center"
          >
            Soluções de <span className="text-white">soft skills</span>{" "}
            fortalecem competências.
          </motion.h1>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-16 max-w-[1500px] mx-auto">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full bg-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
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
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full bg-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <img src={empathyIcon} alt="icone empatia" className="w-16" />
              <h2 className="text-2xl font-bold mt-4 text-gray-800">Empatia</h2>
              <p className="text-lg mt-2 text-gray-700">
                É a habilidade de se colocar no lugar do outro, compreendendo
                seus sentimentos e perspectivas.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="w-full bg-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
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
            </motion.div>
          </div>
        </section>

        {/* SEÇÃO COMO FUNCIONA */}
        <section className="bg-white py-20 px-4 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-blue-950 font-semibold text-4xl md:text-5xl text-center"
          >
            Como Funciona?
          </motion.h1>

          <div className="flex flex-col container md:flex-row justify-center items-start gap-12 lg:gap-20 mt-20 max-w-7xl mx-auto">
            {/* Passo 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-60 h-60 bg-blue-600 rounded-full flex justify-center items-center shadow-lg transition-transform duration-300 hover:scale-105">
                <img src={registerIcon} alt="icone cadastro" className="w-32" />
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold text-blue-950">Cadastro</h2>
                <p className="text-xl text-blue-950 mt-2 max-w-xs mx-auto">
                  Universidades se registram com seus interesses e áreas de
                  atuação.
                </p>
              </div>
            </motion.div>

            {/* Passo 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-60 h-60 bg-blue-600 rounded-full flex justify-center items-center shadow-lg transition-transform duration-300 hover:scale-105">
                <img src={conectionIcon} alt="icone conexão" className="w-32" />
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold text-blue-950">Conexão</h2>
                <p className="text-xl text-blue-950 mt-2 max-w-xs mx-auto">
                  A plataforma cruza os dados e sugere parcerias ideais.
                </p>
              </div>
            </motion.div>

            {/* Passo 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-60 h-60 bg-blue-600 rounded-full flex justify-center items-center shadow-lg transition-transform duration-300 hover:scale-105">
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
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
