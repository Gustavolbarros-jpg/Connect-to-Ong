import React from "react";
import { useNavigate } from "react-router-dom";

import ProjectList from "../../Components/ProjectList";
import Button from "../../Components/Button";
import DashboardImg from "../../assets/images/dashboardImg.png";
import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";

const mockProjects = [
  {
    id: 1,
    name: "Horta Comunitária",
    ong: "Mãos na Terra",
    university: "Universidade de Pernambuco",
    status: "Concluído",
    softSkill: "Trabalho em Equipe, Liderança",
    interestArea: "Meio Ambiente, Sustentabilidade",
    studentCount: 15,
    professors: ["Dr. Carlos Silva", "Dra. Ana Costa"],
    extensionHours: 40,
    startDate: "01/03/2024",
    endDate: "30/06/2024",
    description:
      "Um projeto focado na criação e manutenção de uma horta orgânica para a comunidade do bairro, promovendo segurança alimentar e educação ambiental.",
  },
  {
    id: 2,
    name: "Curso de Inglês",
    ong: "Falando para o Mundo",
    university: "Universidade Católica de Pernambuco",
    status: "Em Andamento",
    softSkill: "Comunicação, Didática",
    interestArea: "Educação, Idiomas",
    studentCount: 25,
    professors: ["Dra. Beatriz Lima"],
    extensionHours: 60,
    startDate: "01/08/2024",
    endDate: "15/12/2024",
    description:
      "Aulas de inglês gratuitas para jovens e adultos de baixa renda, com foco em conversação para o mercado de trabalho.",
  },
  {
    id: 3,
    name: "Reforma da Creche",
    ong: "Construindo o Futuro",
    university: "Instituto Federal de Pernambuco",
    status: "Aguardando Conexão",
    softSkill: "Planejamento, Gestão de Recursos",
    interestArea: "Infraestrutura, Social",
    studentCount: 10,
    professors: ["Eng. Roberto Alves"],
    extensionHours: 80,
    startDate: "A definir",
    endDate: "A definir",
    description:
      "Projeto para reformar as instalações elétricas e hidráulicas da creche Criança Feliz, oferecendo um ambiente mais seguro.",
  },
];

function Dashboard() {
  const navigate = useNavigate();

  const projectsAguardando = mockProjects.filter(
    (p) => p.status === "Aguardando Conexão"
  );
  const projectsEmAndamento = mockProjects.filter(
    (p) => p.status === "Em Andamento"
  );
  const projectsConcluidos = mockProjects.filter(
    (p) => p.status === "Concluído"
  );

  return (
    <div className="bg-white font-roboto">
      <Navbar />
      <main className="min-w-screen">
        <section className="relative h-[45vh] md:h-[35vh] w-full">
          <img
            src={DashboardImg}
            alt="foto do dashboard"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#001449BF]/80 via-[#1A3A8FBF]/80 flex flex-col items-center justify-center text-center p-8 gap-6 md:flex-row md:items-center md:justify-between md:text-left md:p-16 mt-24">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              Desenvolva seus alunos e contribua <br /> socialmente.
            </h1>
            <Button
              onClick={() => navigate("/stepe-one")}
              className="bg-white text-blue-900 font-bold px-8 py-3 rounded-[8px] shadow-lg flex-shrink-0"
            >
              Criar novo Projeto
            </Button>
          </div>
        </section>

        <section className="w-full bg-gray-100 p-4 md:p-16">
          {projectsAguardando.length > 0 && (
            <ProjectList
              title="Projetos Aguardando Conexão"
              projects={projectsAguardando}
            />
          )}
          {projectsEmAndamento.length > 0 && (
            <ProjectList
              title="Projetos Em Andamento"
              projects={projectsEmAndamento}
            />
          )}
          {projectsConcluidos.length > 0 && (
            <ProjectList
              title="Projetos Concluídos"
              projects={projectsConcluidos}
            />
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
