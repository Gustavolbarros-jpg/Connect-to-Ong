import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import InputField from "../../Components/InputField/";
import Button from "../../Components/Button/";
import ProgressBar from "../../Components/ProgressBar/";

function StepeOnePage() {
  const navigate = useNavigate();

  // ... (seus states e a função handleSubmit permanecem iguais)
  const [nameProject, setNameProject] = useState("");
  const [areaInterest, setAreaInterest] = useState("");
  const [softSkills, setSoftSkills] = useState("");
  const [numberStudents, setNumberStudents] = useState("");
  const [teacher, setTeacher] = useState("");
  const [extensionHours, setExtensionHours] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [descriptionProject, setDescriptionProject] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const projectDetails = {
      nameProject,
      areaInterest,
      softSkills,
      numberStudents,
      teacher,
      extensionHours,
      startDate,
      endDate,
      descriptionProject,
    };

    navigate("/stepe-two", { state: { projectDetails } });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-5xl mx-auto">
          <ProgressBar currentStep={0} totalSteps={3} />

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md mt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex flex-col gap-y-6">
                <InputField
                  label="Nome do Projeto"
                  type="text"
                  placeholder="Digite o nome do projeto..."
                  value={nameProject}
                  onChange={(e) => setNameProject(e.target.value)}
                />
                <InputField
                  label="Área de Interesse"
                  type="text"
                  placeholder="Digite a área de interesse..."
                  value={areaInterest}
                  onChange={(e) => setAreaInterest(e.target.value)}
                />
                <InputField
                  label="Soft Skills que busca desenvolver"
                  type="text"
                  placeholder="Digite a soft skills que busca desenvolver..."
                  value={softSkills}
                  onChange={(e) => setSoftSkills(e.target.value)}
                />
                <InputField
                  label="Quantidade de Alunos no projeto"
                  type="number"
                  placeholder="Digite a quantidade de alunos no projeto..."
                  value={numberStudents}
                  onChange={(e) => setNumberStudents(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-y-6">
                <InputField
                  label="Professores atrelados"
                  type="text"
                  placeholder="Digite os professores atrelados ao projeto..."
                  value={teacher}
                  onChange={(e) => setTeacher(e.target.value)}
                />
                <InputField
                  label="Horas de Extensão Oferecidas"
                  type="text"
                  placeholder="Digite as Horas de Extensão oferecidas..."
                  value={extensionHours}
                  onChange={(e) => setExtensionHours(e.target.value)}
                />
                <InputField
                  label="Data de Inicio Prevista"
                  type="date"
                  placeholder="Escolha a data de inicio do projeto..."
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="placeholder-blue-300 focus:ring-blue-500 focus:border-blue-500"
                />
                <InputField
                  label="Data de Conclusão Prevista"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  placeholder="Escolha a data de conclusão do projeto..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[20px] font-medium text-gray-700 mb-1">
                  Descrição do Projeto
                </label>
                <textarea
                  placeholder="Digite uma descrição para o projeto..."
                  value={descriptionProject}
                  onChange={(e) => setDescriptionProject(e.target.value)}
                  rows="5"
                  className="mt-1 block w-full px-3 py-3 border-4 border-blue-600 rounded-[4px] shadow-sm placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[20px]"
                ></textarea>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button type="submit" primary>
                Continuar
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default StepeOnePage;
