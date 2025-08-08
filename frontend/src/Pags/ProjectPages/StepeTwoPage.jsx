import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import Button from "../../Components/Button/";
import ProgressBar from "../../Components/ProgressBar";
import imagesection from "../../assets/images/OngPage/bgImage.png";
import lupaImage from "../../assets/images/OngPage/lupa.png";

const mockAreas = [
  "Área de Atuação", "Cultura", "Arte", "Esporte", "Saúde", "Bem-Estar",
  "Educação", "Formação", "Assistência Social", "Alimentar", "Pessoas com Deficiência",
  "Tecnologia", "Inclusão Digital", "Profissionalização", "Capacitação",
  "Proteção Animal", "Bem-estar Animal", "Meio Ambiente", "Sustentabilidade",
  "Empoderamento Feminino"
];

const mockLocations = [
  "Localidade", "Boa Vista", "Santo Amaro", "Torre", "Espinheiro", "Casa Forte",
  "Afogados", "Bongi", "Encruzilhada", "Ibura", "Iputinga", "Prado"
];

function StepeTwoPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { projectDetails } = location.state || {};

  const [selectedOng, setSelectedOng] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  // MODIFICAÇÃO: O estado de 'selectedArea' agora inicia com o valor de 'areaInterest' vindo da Step One.
  const [selectedArea, setSelectedArea] = useState(projectDetails?.areaInterest || "");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [ongs, setOngs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [areasOptions, setAreasOptions] = useState(mockAreas);
  const [locationsOptions, setLocationsOptions] = useState(mockLocations);

  const fetchOngs = useCallback(async () => {
    setLoading(true);
    setError(null);
    const params = new URLSearchParams();
    if (searchTerm) params.append('nome', searchTerm);
    if (selectedArea) params.append('area', selectedArea);
    if (selectedLocation) params.append('localizacao', selectedLocation);
    const queryString = params.toString();
    const apiUrl = `http://localhost:3000/api/ongs?${queryString}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data.success) {
            const mappedOngs = data.body.map(ong => ({
                id: ong.id_ongs,
                name: ong.nome_ong,
                area: ong.match_area,
                location: ong.Endere_o || "Local não informado",
                description: ong.Sobre || "Descrição não disponível.",
                logo: '/logo-ong-placeholder.png'
            }));
            setOngs(mappedOngs);
        } else {
            throw new Error(data.body.message || "Erro ao buscar dados.");
        }
    } catch (err) {
        console.error("Falha ao buscar ONGs:", err);
        setError("Não foi possível carregar as ONGs. Verifique se o servidor está rodando e tente novamente.");
        setOngs([]);
    } finally {
        setLoading(false);
    }
  }, [searchTerm, selectedArea, selectedLocation]);

  const checkEmptyAreas = useCallback(async () => {
    const validAreas = [];
    
    for (const area of mockAreas) {
        const params = new URLSearchParams();
        params.append('area', area);
        
        try {
            const response = await fetch(`http://localhost:3000/api/ongs?${params}`);
            const data = await response.json();
            
            if (data.success && data.body && data.body.length > 0) {
                validAreas.push(area);
            }
        } catch (error) {
            console.error(`Erro ao verificar área ${area}:`, error);
        }
    }
    
    setAreasOptions(validAreas);
  }, []);

  useEffect(() => {
    checkEmptyAreas();
  }, [checkEmptyAreas]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
        fetchOngs();
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [fetchOngs]);

  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const handleAreaChange = (event) => setSelectedArea(event.target.value);
  const handleLocationChange = (event) => setSelectedLocation(event.target.value);
  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedArea("");
    setSelectedLocation("");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleContinue = (ong = null) => {
    const ongToContinue = ong || selectedOng;

    if (!ongToContinue) {
      alert("Por favor, selecione uma ONG para continuar.");
      return;
    }

    navigate("/stepe-three", {
      state: {
        projectDetails: projectDetails,
        selectedOng: ongToContinue,
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-5xl mx-auto">
          <ProgressBar currentStep={1} totalSteps={3} />

          <div className="mt-8">
            <div className="bg-white p-6 rounded-[4px] shadow-md mb-8">
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img src={lupaImage} alt="Ícone de pesquisa" className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  placeholder="Você tem interesse em uma ONG específica, pesquise aqui..."
                  className="w-full text-base md:text-[20px] p-3 pl-10 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
                <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                  <select
                    className="form-select border border-gray-300 rounded-[4px] bg-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
                    value={selectedArea}
                    onChange={handleAreaChange}
                  >
                    <option value="">Área de Atuação</option>
                    {areasOptions.map((area, index) => (
                      <option key={index} value={area}>{area}</option>
                    ))}
                  </select>

                  <select
                    className="form-select border border-gray-300 rounded-[4px] bg-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                  >
                    <option value="">Localidade</option>
                    {locationsOptions.map((location, index) => (
                      <option key={index} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0 justify-center">
                  <button
                    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-[4px] hover:bg-blue-800 w-full md:w-auto"
                    onClick={handleClearFilters}
                  >
                    Remover Filtros
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {loading && <p className="text-center text-gray-500">Carregando ONGs...</p>}
              {error && <p className="text-center text-red-500">{error}</p>}
              {!loading && !error && ongs.length === 0 && (
                <p className="text-gray-500 col-span-full text-center">Nenhuma ONG encontrada com os critérios de busca.</p>
              )}
              {!loading && !error && ongs.length > 0 && ongs.map((ong) => (
                <div
                  key={ong.id}
                  className={`bg-white p-6 rounded-lg shadow-md border-2 transition-all duration-200 ${
                    selectedOng?.id === ong.id ? "border-blue-800" : "border-transparent"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-800">
                        {ong.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {ong.area}
                      </p>
                      <p className="text-gray-700 mb-4">{ong.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {[ong.location, ong.area].map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-full sm:w-auto">
                      {selectedOng?.id === ong.id ? (
                        <button
                          className="w-full px-4 py-2 rounded-md font-[20px] font-semibold transition-colors duration-200 bg-blue-600 text-white hover:bg-blue-800"
                          onClick={() => handleContinue(ong)}
                        >
                          Selecionar
                        </button>
                      ) : (
                        <button
                          className="w-full px-4 py-2 rounded-md font-medium transition-colors duration-200 bg-blue-500 text-white hover:bg-blue-600"
                          onClick={() => setSelectedOng(ong)}
                        >
                          ESCOLHER ONG
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-between items-center">
              <Button type="button" onClick={handleGoBack} primary>
                Voltar
              </Button>
              <Button type="button" primary onClick={handleContinue}>
                Continuar
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default StepeTwoPage;