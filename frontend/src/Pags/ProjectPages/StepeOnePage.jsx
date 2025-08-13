import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isBefore, startOfToday } from "date-fns";
import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import InputField from "../../Components/InputField/";
import Button from "../../Components/Button/";
import ProgressBar from "../../Components/ProgressBar/";

// Dicionário de palavras-chave para padronizar o filtro de Área de Atuação
// Esta lista deve ser idêntica à do componente OngList
const AREA_KEYWORDS = [
    "Acolhimento", "Acompanhamento Familiar", "Acompanhamento Jurídico", "Agricultura",
    "Alimentar", "Ambiental", "Apoio Comunitário", "Apoio Psicossocial", "Artesanato", 
    "Assistência Social", "Bem-estar", "Cultura", "Educação", "Empregabilidade", 
    "Empoderamento Feminino", "Esporte", "Geração de Renda", "Inclusão Social", "Lazer", 
    "Liderança", "Meio Ambiente", "Profissionalização", "Saúde", "Sustentabilidade", "Tecnologia"
].sort();

function StepeOnePage({onLogout}) {
  const navigate = useNavigate();

  // Usar um único estado para o formulário e outro para os erros
  const [formData, setFormData] = useState({
    nameProject: "",
    areaInterest: "",
    softSkills: "",
    numberStudents: "",
    teacher: "",
    extensionHours: "",
    startDate: "",
    endDate: "",
    descriptionProject: "",
  });

  const [errors, setErrors] = useState({});

  // Função única para lidar com a mudança de todos os inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    // Limpa o erro do campo quando o utilizador começa a corrigir
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  // Função de validação
  const validateForm = () => {
    const newErrors = {};

    // Nome do Projeto: pelo menos duas palavras
    if (!formData.nameProject.trim() || !/\s/.test(formData.nameProject.trim())) {
      newErrors.nameProject = "O nome do projeto deve conter pelo menos duas palavras.";
    }

    // Área de Interesse: deve ser selecionada
    if (!formData.areaInterest) {
      newErrors.areaInterest = "Por favor, selecione uma área de interesse.";
    }
    
    // Soft Skills e Professores: não podem estar vazios
    if (!formData.softSkills.trim()) newErrors.softSkills = "Este campo é obrigatório.";
    if (!formData.teacher.trim()) newErrors.teacher = "Este campo é obrigatório.";

    // Quantidade de Alunos e Horas: devem ser números positivos
    if (Number(formData.numberStudents) <= 0) newErrors.numberStudents = "A quantidade deve ser maior que zero.";
    if (Number(formData.extensionHours) <= 0) newErrors.extensionHours = "A quantidade de horas deve ser maior que zero.";

    // Datas: data de fim deve ser posterior à de início
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    if (!formData.startDate) newErrors.startDate = "A data de início é obrigatória.";
    if (formData.startDate && isBefore(start, startOfToday())) {
      newErrors.startDate = "A data de início não pode ser no passado.";
    }
    if (!formData.endDate) newErrors.endDate = "A data de conclusão é obrigatória.";
    if (formData.startDate && formData.endDate && start >= end) {
      newErrors.endDate = "A data de conclusão deve ser posterior à data de início.";
    }
    
    // Descrição: mínimo de 50 caracteres
    if (formData.descriptionProject.trim().length < 50) {
        newErrors.descriptionProject = "A descrição deve ter pelo menos 50 caracteres.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return; // Impede o envio se houver erros
    }

    // Se a validação passar, continua o processo
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const diffTime = Math.abs(end - start);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));
    const expectedTime = diffMonths;

    const projectDetails = { ...formData, expectedTime };

    // Navega para a próxima etapa, passando os detalhes do projeto
    // Incluindo a área de interesse para o pré-filtro
    navigate("/stepe-two", { state: { projectDetails } });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar onLogout={onLogout} />
      <main className="flex-grow container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-5xl mx-auto">
          <ProgressBar currentStep={1} totalSteps={3} />
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md mt-8">
            {/* A estrutura do grid foi reorganizada para melhor simetria */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* Linha 1: Nome do Projeto e Área de Interesse */}
              <div className="md:col-span-1">
                <InputField label="Nome do Projeto" name="nameProject" type="text" placeholder="Digite o nome do projeto..." value={formData.nameProject} onChange={handleChange} error={errors.nameProject} />
                {errors.nameProject && <p className="text-red-500 text-sm mt-1">{errors.nameProject}</p>}
              </div>
              <div className="md:col-span-1">
                <label htmlFor="area-interesse" className="block text-[20px] font-medium text-gray-700 mb-1">Área de Interesse</label>
                <select id="area-interesse" name="areaInterest" value={formData.areaInterest} onChange={handleChange} className={`mt-1 block w-full p-3 border rounded-[4px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[20px] bg-white ${errors.areaInterest ? 'border-red-500' : 'border-gray-300'}`}>
                  <option value="" disabled>Selecione uma área...</option>
                  {AREA_KEYWORDS.map((area, index) => (<option key={index} value={area}>{area}</option>))}
                </select>
                {errors.areaInterest && <p className="text-red-500 text-sm mt-1">{errors.areaInterest}</p>}
              </div>

              {/* Linha 2: Soft Skills e Professores */}
              <div className="md:col-span-1">
                <InputField label="Soft Skills que busca desenvolver" name="softSkills" type="text" placeholder="Comunicação, liderança, etc..." value={formData.softSkills} onChange={handleChange} error={errors.softSkills} />
                {errors.softSkills && <p className="text-red-500 text-sm mt-1">{errors.softSkills}</p>}
              </div>
              <div className="md:col-span-1">
                <InputField label="Professores atrelados" name="teacher" type="text" placeholder="Digite os nomes dos professores..." value={formData.teacher} onChange={handleChange} error={errors.teacher} />
                {errors.teacher && <p className="text-red-500 text-sm mt-1">{errors.teacher}</p>}
              </div>

              {/* Linha 3: Alunos e Horas */}
              <div className="md:col-span-1">
                <InputField label="Quantidade de Alunos no projeto" name="numberStudents" type="number" placeholder="Digite a quantidade de alunos..." value={formData.numberStudents} onChange={handleChange} error={errors.numberStudents} />
                {errors.numberStudents && <p className="text-red-500 text-sm mt-1">{errors.numberStudents}</p>}
              </div>
              <div className="md:col-span-1">
                <InputField label="Horas de Extensão Oferecidas" name="extensionHours" type="number" placeholder="Digite o total de horas..." value={formData.extensionHours} onChange={handleChange} error={errors.extensionHours} />
                {errors.extensionHours && <p className="text-red-500 text-sm mt-1">{errors.extensionHours}</p>}
              </div>

              {/* Linha 4: Datas */}
              <div className="md:col-span-1">
                <InputField label="Data de Inicio Prevista" name="startDate" type="date" value={formData.startDate} onChange={handleChange} error={errors.startDate} />
                {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
              </div>
              <div className="md:col-span-1">
                <InputField label="Data de Conclusão Prevista" name="endDate" type="date" value={formData.endDate} onChange={handleChange} error={errors.endDate} />
                {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
              </div>
              
              {/* Linha 5: Descrição */}
              <div className="md:col-span-2">
                <label className="block text-[20px] font-medium text-gray-700 mb-1">Descrição do Projeto</label>
                <textarea name="descriptionProject" placeholder="Digite uma descrição para o projeto..." value={formData.descriptionProject} onChange={handleChange} rows="5" className={`mt-1 block w-full px-3 py-3 border rounded-[4px] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[20px] ${errors.descriptionProject ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                {errors.descriptionProject && <p className="text-red-500 text-sm mt-1">{errors.descriptionProject}</p>}
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button type="submit" primary className="text-[20px]">Continuar</Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default StepeOnePage;
