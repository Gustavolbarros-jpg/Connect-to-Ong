import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import InputField from "../../Components/InputField/";
import Button from "../../Components/Button/";

function StepeOnePage() {
  const navigate = useNavigate();

  const [nameProject, setNameProject] = useState("");
  const [areaInterest, setAreaInterest] = useState("");
  const [softSkills, setSoftSkills] = useState("");
  const [numberStudents, setNumberStudents] = useState("");
  const [teacher, setTeacher] = useState("");
  const [extensionHours, setExtensionHours] = useState("");
  const [expectedTime, setExpectedTime] = useState("");
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
      expectedTime,
      descriptionProject,
    };

    navigate("/stepe-two", { state: { projectDetails } });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <p className="mt-2 text-sm font-semibold text-blue-600">
                Detalhes do Projeto
              </p>
            </div>
            <div className="flex-auto border-t-2 border-gray-300 mx-4"></div>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold">
                2
              </div>
              <p className="mt-2 text-sm text-gray-500">Conexão com a ONG</p>
            </div>
            <div className="flex-auto border-t-2 border-gray-300 mx-4"></div>
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold">
                3
              </div>
              <p className="mt-2 text-sm text-gray-500">Confirmar projeto</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md"
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
                  label="Tempo previsto"
                  type="text"
                  placeholder="Digite o tempo previsto..."
                  value={expectedTime}
                  onChange={(e) => setExpectedTime(e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição do Projeto
                </label>
                <textarea
                  placeholder="Digite uma descrição para o projeto..."
                  value={descriptionProject}
                  onChange={(e) => setDescriptionProject(e.target.value)}
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
