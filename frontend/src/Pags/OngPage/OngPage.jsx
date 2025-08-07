import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import OngCard from "../../Components/OngCard";
import OngDetailModal from "../../Components/OngDetailModal";
import imagesection from "../../assets/images/OngPage/bgImage.png";
import lupaImage from "../../assets/images/OngPage/lupa.png";

const mockAreas = [
   "Cultura", "Arte", "Esporte", "Saúde", "Bem-Estar",
  "Educação", "Formação", "Assistência Social", "Alimentar", "Pessoas com Deficiência",
  "Tecnologia", "Inclusão Digital", "Profissionalização", "Capacitação",
  "Proteção Animal", "Bem-estar Animal", "Meio Ambiente", "Sustentabilidade",
  "Empoderamento Feminino"
];

const mockLocations = [
  "Localidade", "Boa Vista", "Santo Amaro", "Torre", "Espinheiro", "Casa Forte",
  "Afogados", "Bongi", "Encruzilhada", "Ibura", "Iputinga", "Prado"
];
function OngPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedArea, setSelectedArea] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [ongs, setOngs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [areasOptions, setAreasOptions] = useState(mockAreas);
    const [locationsOptions, setLocationsOptions] = useState(mockLocations);
    const [selectedOng, setSelectedOng] = useState(null);

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
    
    const handleOpenDetails = (ong) => setSelectedOng(ong);
    const handleCloseDetails = () => setSelectedOng(null);

    // Adiciona função de teste para verificar áreas sem resultados
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

    return (
        <div className="font-roboto h-screen w-full text-[#001449]">
            <Navbar /> 
            <main className="min-h-screen w-full bg-[#F4F0F0] pt-16 md:pt-20 lg:pt-24">
                {/* Seção do cabeçalho com imagem de fundo */}
                <section className="w-full h-36 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url('${imagesection}')` }}>
                </section>

                {/* Seção de busca e filtros */}
                <section className="container mx-auto p-4 md:p-8 max-w-6xl rounded-lg mt-4">
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <img src={lupaImage} alt="Ícone de pesquisa" className="h-5 w-5" />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Você tem interesse em uma ONG's específica, pesquise aqui..."
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
                                className="bg-gray-200 text-gray-800 bg-white py-2 px-4 rounded-[4px] hover:bg-gray-300 w-full md:w-auto" 
                                onClick={handleClearFilters}
                            >
                                Remover Filtros
                            </button>
                        </div>
                    </div>
                </section>

                {/* Seção dos cards de ONGs */}
                <section className="container mx-auto p-4 md:p-8 max-w-6xl mt-8">
                    {loading && <p className="text-center text-gray-500">Carregando ONGs...</p>}
                    {error && <p className="text-center text-red-500">{error}</p>}
                    {!loading && !error && ongs.length === 0 && (
                        <p className="text-gray-500 col-span-full text-center">Nenhuma ONG encontrada com os critérios de busca.</p>
                    )}
                    {!loading && !error && ongs.length > 0 && (
                        <div className="grid grid-cols-1 gap-6">
                            {ongs.map(ong => (
                                <OngCard 
                                    key={ong.id} 
                                    ong={ong} 
                                    onCardClick={() => handleOpenDetails(ong)}
                                />
                            ))}
                        </div>
                    )}
                </section>

                {selectedOng && (
                    <OngDetailModal ong={selectedOng} onClose={handleCloseDetails} />
                )}
            </main>
            <Footer />
        </div>
    );
}


export default OngPage;


