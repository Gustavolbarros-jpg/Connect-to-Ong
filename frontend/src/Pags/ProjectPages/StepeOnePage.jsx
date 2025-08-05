import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import InputField from "../../Components/InputField/";
import Button from "../../Components/Button/";
import ProgressBar from "../../Components/ProgressBar/";

// MODIFICAÇÃO: Adicionando a lista de áreas de interesse
const mockAreas = [
  "Cultura", "Arte", "Esporte", "Saúde", "Bem-Estar",
  "Educação", "Formação", "Assistência Social", "Alimentar", "Pessoas com Deficiência",
  "Tecnologia", "Inclusão Digital", "Profissionalização", "Capacitação",
  "Proteção Animal", "Bem-estar Animal", "Meio Ambiente", "Sustentabilidade",
  "Empoderamento Feminino"
];

function StepeOnePage() {
  const navigate = useNavigate();

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

    // Validação para garantir que uma área de interesse foi selecionada
    if (!areaInterest) {
      alert("Por favor, selecione uma área de interesse.");
      return;
    }

    let expectedTime = 0;
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));
      expectedTime = diffMonths;
    }

    const projectDetails = {
      nameProject,
      areaInterest,
      softSkills,
      numberStudents,
      teacher,
      extensionHours,
      startDate,
      endDate,
      expectedTime,
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
                  required
                />
                
                {/* MODIFICAÇÃO: Substituição do InputField por um <select> */}
                <div>
                  <label htmlFor="area-interesse" className="block text-[20px] font-medium text-gray-700 mb-1">
                    Área de Interesse
                  </label>
                  <select
                    id="area-interesse"
                    value={areaInterest}
                    onChange={(e) => setAreaInterest(e.target.value)}
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-[4px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[20px] bg-white"
                  >
                    <option value="" disabled>Selecione uma área...</option>
                    {mockAreas.map((area, index) => (
                      <option key={index} value={area}>{area}</option>
                    ))}
                  </select>
                </div>

                <InputField
                  label="Soft Skills que busca desenvolver"
                  type="text"
                  placeholder="Comunicação, liderança, etc..."
                  value={softSkills}
                  onChange={(e) => setSoftSkills(e.target.value)}
                  required
                />
                <InputField
                  label="Quantidade de Alunos no projeto"
                  type="number"
                  placeholder="Digite a quantidade de alunos..."
                  value={numberStudents}
                  onChange={(e) => setNumberStudents(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-y-6">
                <InputField
                  label="Professores atrelados"
                  type="text"
                  placeholder="Digite os nomes dos professores..."
                  value={teacher}
                  onChange={(e) => setTeacher(e.target.value)}
                  required
                />
                <InputField
                  label="Horas de Extensão Oferecidas"
                  type="number"
                  placeholder="Digite o total de horas..."
                  value={extensionHours}
                  onChange={(e) => setExtensionHours(e.target.value)}
                  required
                />
                <InputField
                  label="Data de Inicio Prevista"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
                <InputField
                  label="Data de Conclusão Prevista"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
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
                  required
                  className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-[4px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-[20px]"
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