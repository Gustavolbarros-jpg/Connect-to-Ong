// src/components/OngList.jsx
import React, { useState, useEffect, useCallback } from "react";
import OngCard from './OngCard';

const API_BASE_URL = "http://localhost:3000/api/ongs";
const ITEMS_PER_PAGE = 5;

const AREA_KEYWORDS = [
    "Acolhimento", "Acompanhamento Familiar", "Acompanhamento Jurídico", "Agricultura",
    "Alimentar", "Ambiental", "Apoio Comunitário", "Apoio Psicossocial", "Artesanato", 
    "Assistência Social", "Bem-estar", "Cultura", "Educação", "Empregabilidade", 
    "Empoderamento Feminino", "Esporte", "Geração de Renda", "Inclusão Social", "Lazer", 
    "Liderança", "Meio Ambiente", "Profissionalização", "Saúde", "Sustentabilidade", "Tecnologia"
].sort();

const RECIFE_NEIGHBORHOODS = [
    "Aflitos", "Afogados", "Água Fria", "Alto José Bonifácio", "Alto José do Pinho",
    "Apipucos", "Areias", "Arruda", "Barro", "Beberibe", "Boa Viagem", "Boa Vista",
    "Bomba do Hemetério", "Bongi", "Brasília Teimosa", "Brejo da Guabiraba",
    "Brejo de Beberibe", "Cabanga", "Caçote", "Cajueiro", "Campina do Barreto",
    "Campo Grande", "Casa Amarela", "Casa Forte", "Caxangá", "Cidade Universitária",
    "Coelhos", "Coqueiral", "Cordeiro", "Derby", "Dois Irmãos", "Dois Unidos",
    "Encruzilhada", "Espinheiro", "Estância", "Fundão", "Graças", "Guabiraba",
    "Hipódromo", "Ibura", "Ilha do Leite", "Ilha do Retiro", "Ilha Joana Bezerra",
    "Imbiribeira", "Iputinga", "Jaqueira", "Jardim São Paulo", "Jiquiá", "Jordão",
    "Linha do Tiro", "Macaxeira", "Madalena", "Mangabeira", "Mangueira", "Monteiro",
    "Morro da Conceição", "Mustardinha", "Nova Descoberta", "Paissandu", "Parnamirim",
    "Passarinho", "Pau Ferro", "Pina", "Poço da Panela", "Ponto de Parada",
    "Porto da Madeira", "Prado", "Recife", "Rosarinho", "San Martin", "Santana",
    "Santo Amaro", "Santo Antônio", "São José", "Sítio dos Pintos", "Soledade",
    "Tamarineira", "Tejipió", "Torre", "Torreão", "Torrões", "Totó", "Várzea", "Zumbi"
].sort();

// Adicionado valor padrão 'null' para selectedOngId e 'initialAreaFilter'
function OngList({ showActionButton, actionButtonText, onActionClick, selectedOngId = null, initialAreaFilter = "" }) {
    // --- Estados do Componente ---
    const [allOngs, setAllOngs] = useState([]);
    const [filteredOngs, setFilteredOngs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchTerm, setSearchTerm] = useState("");
    // O estado 'selectedArea' agora começa com o valor recebido da StepeOnePage
    const [selectedArea, setSelectedArea] = useState(initialAreaFilter);
    const [selectedLocation, setSelectedLocation] = useState("");
    
    const [areasOptions, setAreasOptions] = useState([]);
    const [locationsOptions, setLocationsOptions] = useState(RECIFE_NEIGHBORHOODS);

    const [currentPage, setCurrentPage] = useState(1);

    // --- Lógica de Busca de Dados (API) ---
    useEffect(() => {
        const fetchAllOngs = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(API_BASE_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (data.success && data.body) {
                    const mappedOngs = data.body.map(ong => ({
                        id: ong.id_ongs,
                        name: ong.nome_ong,
                        area: ong.match_area || "Não informada",
                        location: ong.Endere_o || "Não informado",
                        description: ong.Sobre || "Descrição não disponível.",
                        logo: ong.logo_ong || '/logo-ong-placeholder.png'
                    }));
                    setAllOngs(mappedOngs);
                } else {
                    throw new Error(data.body.message || "Erro ao processar dados da API.");
                }
            } catch (err) {
                console.error("Falha ao buscar ONGs:", err);
                setError("Não foi possível carregar as ONGs. Tente novamente mais tarde.");
            } finally {
                setLoading(false);
            }
        };

        fetchAllOngs();
    }, []);

    // --- Lógica para gerar opções de filtro de ÁREA dinamicamente usando o dicionário ---
    useEffect(() => {
        if (allOngs.length > 0) {
            const foundKeywords = new Set();
            AREA_KEYWORDS.forEach(keyword => {
                if (allOngs.some(ong => ong.area.includes(keyword))) {
                    foundKeywords.add(keyword);
                }
            });
            
            setAreasOptions([...foundKeywords]);
        }
    }, [allOngs]);

    // --- Lógica de Filtro (executada localmente) ---
    useEffect(() => {
        let currentOngs = [...allOngs];

        if (searchTerm) {
            currentOngs = currentOngs.filter(ong => 
                ong.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (ong.description && ong.description.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
        if (selectedArea) {
            currentOngs = currentOngs.filter(ong => ong.area.includes(selectedArea));
        }
        if (selectedLocation) {
            currentOngs = currentOngs.filter(ong => ong.location.includes(selectedLocation));
        }

        setFilteredOngs(currentOngs);
        setCurrentPage(1);
    }, [searchTerm, selectedArea, selectedLocation, allOngs]);


    // --- Handlers e Lógica de Paginação ---
    const handleSearchChange = (event) => setSearchTerm(event.target.value);
    const handleAreaChange = (event) => setSelectedArea(event.target.value);
    const handleLocationChange = (event) => setSelectedLocation(event.target.value);
    const handleClearFilters = () => {
        setSearchTerm("");
        setSelectedArea("");
        setSelectedLocation("");
    };
    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Lógica de paginação local
    const totalPages = Math.ceil(filteredOngs.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentOngsToDisplay = filteredOngs.slice(startIndex, endIndex);
    
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const pageRange = 2;

        let startPage = Math.max(1, currentPage - pageRange);
        let endPage = Math.min(totalPages, currentPage + pageRange);

        if (currentPage <= pageRange + 1 && totalPages > (pageRange * 2 + 1)) {
            endPage = (pageRange * 2 + 1);
        }
        else if (currentPage >= totalPages - pageRange && totalPages > (pageRange * 2 + 1)) {
            startPage = totalPages - (pageRange * 2);
        }

        if (startPage > 1) {
            pageNumbers.push(1);
            if (startPage > 2) {
                pageNumbers.push('...');
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            if (!pageNumbers.includes(i)) {
                pageNumbers.push(i);
            }
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pageNumbers.push('...');
            }
            if (!pageNumbers.includes(totalPages) && totalPages > 1) {
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers.map((num, index) => {
            if (num === '...') {
                return (
                    <span key={`ellipsis-${index}`} className="mx-1 px-2 py-1 text-[18px] text-gray-700">...</span>
                );
            }
            return (
                <button
                    key={num}
                    onClick={() => handlePageChange(num)}
                    className={`mx-1 px-3 py-1 text-[20px] md:px-4 md:py-2 rounded-[4px] font-medium transition-colors ${
                        currentPage === num ? 'bg-blue-800 text-white' : 'bg-blue-600 text-white text-[18px] hover:bg-blue-700'
                    }`}
                >
                    {num}
                </button>
            );
        });
    };

    return (
        <div className="w-full">
            {/* Seção da Barra de Pesquisa e Filtros */}
            <section className="container mx-auto p-4 md:p-6 max-w-6xl bg-white rounded-[4px] shadow-md mt-4">
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Pesquise por uma ONG..."
                        className="w-full text-gray-800 text-base md:text-lg p-3 pl-10 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        <select
                            className="w-full sm:w-auto form-select bg-blue-600 hover:bg-blue-700 text-white font-semibold border-transparent rounded-[4px] py-3 px-4 text-[20px] transition-colors"
                            value={selectedArea}
                            onChange={handleAreaChange}
                        >
                            <option value="">Todas as Áreas</option>
                            {areasOptions.map(area => <option key={area} value={area}>{area}</option>)}
                        </select>
                        <select
                            className="w-full sm:w-auto form-select bg-blue-600 hover:bg-blue-700 text-white font-semibold border-transparent rounded-[4px] py-2 px-4 text-[20px] transition-colors"
                            value={selectedLocation}
                            onChange={handleLocationChange}
                        >
                            <option value="">Todas as Localidades</option>
                            {locationsOptions.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                        </select>
                    </div>
                    <button 
                        className="w-full lg:w-auto font-semibold bg-blue-600 text-white text-[20px] py-2 px-5 rounded-[4px] hover:bg-blue-800 transition-colors"
                        onClick={handleClearFilters}
                    >
                        Remover Filtros
                    </button>
                </div>
            </section>

            {/* Seção para Exibir os Cards das ONGs */}
            <section className="container mx-auto p-4 md:p-8 max-w-6xl mt-8">
                {loading && <p className="text-center text-gray-500">A carregar ONGs...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {!loading && !error && currentOngsToDisplay.length === 0 && (
                    <p className="text-gray-600 col-span-full text-center py-10">Nenhuma ONG encontrada com os critérios de busca.</p>
                )}
                {!loading && !error && currentOngsToDisplay.length > 0 && (
                    <div className="grid gap-6">
                        {currentOngsToDisplay.map(ong => (
                            <OngCard
                                key={ong.id}
                                ong={ong}
                                showActionButton={showActionButton}
                                actionButtonText={actionButtonText}
                                onActionClick={onActionClick}
                                isSelected={ong.id === selectedOngId}
                            />
                        ))}
                    </div>
                )}
            </section>

            {/* Controles de Paginação */}
            {!loading && !error && totalPages > 1 && (
                 <div className="flex flex-wrap justify-center items-center mt-8 gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 text-[20px] font-semibold text-white rounded-[4px] bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Anterior
                    </button>
                    <div className="flex items-center gap-1 text-[20px]">
                      {renderPageNumbers()}
                    </div>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 text-[20px] font-semibold text-white rounded-[4px] bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Próximo
                    </button>
                </div>
            )}
        </div>
    );
}

export default OngList;
