// src/components/OngList.jsx
import React, { useState, useEffect } from "react";
import OngCard from './OngCard';

// --- Dados Mockados (para desenvolvimento, substituir por API real) ---
const allOngsData = [
    { id: 1, logo: '/logo-ong-placeholder.png', name: "Grupo Paz e Amor", subtitle: "Desenvolvimento Sustentável", description: "Desde 1987, o Grupo Paz e Amor transforma a vida da melhor idade, combatendo o isolamento e promovendo saúde e alegria. Nosso propósito é simples, mas poderoso: tirar os idosos de casa, movimentar corpos e conectar corações, fortalecendo laços comunitários e oferecendo dignidade. Realizamos atividades recreativas, apoio psicológico e oficinas de bem-estar para que a terceira idade viva com plenitude.", area: "Saúde", location: "Recife"},
    { id: 2, logo: '/logo-ong-placeholder.png', name: "ONG Verde Esperança", subtitle: "Consciência Ambiental", description: "Focada na recuperação de áreas verdes urbanas e educação ambiental, promove a conscientização da comunidade sobre a importância da sustentabilidade. Nossos projetos envolvem plantio de árvores, limpeza de rios e palestras educativas em escolas e comunidades. Acreditamos que a mudança começa com a educação e a ação local.", area: "Meio Ambiente", location: "Olinda"},
    { id: 3, logo: '/logo-ong-placeholder.png', name: "Educação para o Futuro", subtitle: "Apoio Educacional", description: "Oferece reforço escolar e atividades culturais para crianças e adolescentes em situação de vulnerabilidade. Nosso objetivo é complementar a educação formal, oferecendo um ambiente seguro e estimulante para o desenvolvimento integral dos jovens. Contamos com voluntários e parceiros para expandir nosso alcance.", area: "Educação", location: "Recife"},
    { id: 4, logo: '/logo-ong-placeholder.png', name: "Mãos Solidárias", subtitle: "Assistência Comunitária", description: "Apoio a famílias em situação de vulnerabilidade social com doações de alimentos, roupas, itens de higiene e assistência jurídica básica. Atuamos em comunidades carentes, promovendo dignidade e esperança para aqueles que mais precisam. Nosso trabalho é feito por meio de campanhas e ações diretas no território.", area: "Assistência Social", location: "Jaboatão"},
    { id: 5, logo: '/logo-ong-placeholder.png', name: "Lar dos Idosos Feliz", subtitle: "Cuidado e Afeto", description: "Abrigo e cuidado para idosos sem suporte familiar, com atividades recreativas, fisioterapia e acompanhamento médico. Nosso lar proporciona um ambiente acolhedor e seguro, onde a dignidade e o bem-estar dos nossos residentes são a prioridade.", area: "Saúde", location: "Recife"},
    { id: 6, logo: '/logo-ong-placeholder.png', name: "Arte e Cultura Viva", subtitle: "Promoção Cultural", description: "Promove a arte e a cultura em comunidades carentes, oferecendo oficinas de música, dança e teatro para jovens.", area: "Cultura", location: "Recife"},
    { id: 7, logo: '/logo-ong-placeholder.png', name: "Jardim Urbano", subtitle: "Hortas Comunitárias", description: "Criação e manutenção de hortas comunitárias em espaços urbanos, incentivando a alimentação saudável e o contato com a natureza.", area: "Meio Ambiente", location: "Olinda"},
    { id: 8, logo: '/logo-ong-placeholder.png', name: "Voz Animal", subtitle: "Proteção Animal", description: "Resgate e reabilitação de animais abandonados, promovendo a adoção responsável e a conscientização sobre os direitos animais.", area: "Direitos Animais", location: "Recife"},
    { id: 9, logo: '/logo-ong-placeholder.png', name: "Tecno Inclusão", subtitle: "Educação Tecnológica", description: "Oferece cursos básicos de informática e programação para comunidades de baixa renda, visando a inclusão digital e profissional.", area: "Tecnologia", location: "Jaboatão"},
    { id: 10, logo: '/logo-ong-placeholder.png', name: "Amigos do Mar", subtitle: "Limpeza de Praias", description: "Realiza mutirões de limpeza de praias e rios, educando a população sobre a poluição marinha.", area: "Meio Ambiente", location: "Pina"},
    { id: 12, logo: '/logo-ong-placeholder.png', name: "Crescer Juntos", subtitle: "Apoio a Famílias", description: "Oferece suporte psicossocial e oficinas para famílias em situação de risco, promovendo o fortalecimento de vínculos.", area: "Assistência Social", location: "Recife"},
    { id: 13, logo: '/logo-ong-placeholder.png', name: "Crescer Juntos", subtitle: "Apoio a Famílias", description: "Oferece suporte psicossocial e oficinas para famílias em situação de risco, promovendo o fortalecimento de vínculos.", area: "Assistência Social", location: "Recife"},
    { id: 14, logo: '/logo-ong-placeholder.png', name: "Crescer Juntos", subtitle: "Apoio a Famílias", description: "Oferece suporte psicossocial e oficinas para famílias em situação de risco, promovendo o fortalecimento de vínculos.", area: "Assistência Social", location: "Recife"},
    { id: 15, logo: '/logo-ong-placeholder.png', name: "Crescer Juntos", subtitle: "Apoio a Famílias", description: "Oferece suporte psicossocial e oficinas para famílias em situação de risco, promovendo o fortalecimento de vínculos.", area: "Assistência Social", location: "Recife"},
    { id: 16, logo: '/logo-ong-placeholder.png', name: "Crescer Juntos", subtitle: "Apoio a Famílias", description: "Oferece suporte psicossocial e oficinas para famílias em situação de risco, promovendo o fortalecimento de vínculos.", area: "Assistência Social", location: "Recife"},

];

const mockAreas = ["Educação", "Saúde", "Meio Ambiente", "Assistência Social", "Cultura", "Direitos Animais", "Tecnologia"];
const mockLocations = ["Recife", "Olinda", "Jaboatão", "Pina"];

function OngList({ showActionButton, actionButtonText, onActionClick }) {

  // --- Estados para Lógica de Pesquisa e Filtro ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const [allOngs, setAllOngs] = useState([]);
  const [filteredOngs, setFilteredOngs] = useState([]);

  const [loadingOngs, setLoadingOngs] = useState(true);
  const [errorOngs, setErrorOngs] = useState(null);

  // --- Estados para as OPÇÕES dos Filtros Dinâmicos ---
  const [areasOptions, setAreasOptions] = useState([]);
  const [locationsOptions, setLocationsOptions] = useState([]);

  const [loadingFilterOptions, setLoadingFilterOptions] = useState(true);
  const [errorFilterOptions, setErrorFilterOptions] = useState(null);

  // --- NOVOS ESTADOS PARA PAGINAÇÃO ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Definido o limite de 5 cards por vez

  // --- useEffect para Carregar ONGs e Opções de Filtro ---
  useEffect(() => {
    const fetchData = async () => {
      setLoadingOngs(true);
      setLoadingFilterOptions(true);
      setErrorOngs(null);
      setErrorFilterOptions(null);

      try {
        const ongsData = await new Promise(res => setTimeout(() => res(allOngsData), 500));
        setAllOngs(ongsData);
        setFilteredOngs(ongsData);

        const fetchedAreas = await new Promise(res => setTimeout(() => res(mockAreas), 300));
        const fetchedLocations = await new Promise(res => setTimeout(() => res(mockLocations), 300));
        
        setAreasOptions(fetchedAreas);
        setLocationsOptions(fetchedLocations);

      } catch (err) {
        console.error("Erro ao carregar dados:", err);
        setErrorOngs("Não foi possível carregar as ONGs. Tente novamente mais tarde.");
        setErrorFilterOptions("Não foi possível carregar opções de filtro.");
      } finally {
        setLoadingOngs(false);
        setLoadingFilterOptions(false);
      }
    };

    fetchData();
  }, []);

  // --- useEffect para Filtrar ONGs ---
  useEffect(() => {
    setCurrentPage(1); // Sempre volta para a primeira página ao aplicar novos filtros ou busca
    let currentOngs = [...allOngs];

    if (searchTerm) {
      currentOngs = currentOngs.filter(ong =>
        ong.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ong.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedArea && selectedArea !== "") {
      currentOngs = currentOngs.filter(ong => ong.area === selectedArea);
    }
    if (selectedLocation && selectedLocation !== "") {
      currentOngs = currentOngs.filter(ong => ong.location === selectedLocation);
    }

    setFilteredOngs(currentOngs);

  }, [searchTerm, selectedArea, selectedLocation, allOngs]);

  // --- Funções para Lidar com Mudanças nos Inputs/Selects ---
  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const handleAreaChange = (event) => setSelectedArea(event.target.value);
  const handleLocationChange = (event) => setSelectedLocation(event.target.value);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedArea("");
    setSelectedLocation("");
  };

  // --- LÓGICA DE PAGINAÇÃO ---
  const totalPages = Math.ceil(filteredOngs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOngsToDisplay = filteredOngs.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Opcional: rolar para o topo da lista de cards ao mudar de página
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

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
                <span key={`ellipsis-${index}`} className="mx-1 px-3 py-1 rounded-[4px] text-[20px] text-gray-700">...</span>
            );
        }
        return (
            <button
                key={num}
                onClick={() => handlePageChange(num)}
                className={`mx-1 px-5 py-2 rounded-[4px] text-[20px] font-medium ${
                    currentPage === num ? 'bg-blue-800 text-white' : 'bg-blue-600 text-white hover:bg-blue-800'
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
      <section className="container mx-auto p-4 md:p-8 max-w-6xl bg-blue-600 rounded-[4px] shadow-md mt-4">
        {/* Campo de Busca */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          </div>
          <input
            type="text"
            placeholder="Você tem interesse em uma ONG's específica, pesquise aqui..."
            className="w-full text-blue-800 text-[20px] p-3 pl-10 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Filtros e Botões de Ação */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto text-[18px] text-[#001449]">


            {/* Select de Área de Atuação */}
            <select
              className="form-select bg-white border border-white rounded-[4px] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
              value={selectedArea}
              onChange={handleAreaChange}
            >
              <option value="">Área de Atuação</option>
              {loadingFilterOptions ? (
                <option disabled>Carregando...</option>
              ) : errorFilterOptions ? (
                <option disabled>Erro ao carregar</option>
              ) : (
                areasOptions.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))
              )}
            </select>



            {/* Select de Localidade */}
            <select
              className="form-select bg-white border border-white rounded-[4px] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option value="">Localidade</option>
              {loadingFilterOptions ? (
                <option disabled>Carregando...</option>
              ) : errorFilterOptions ? (
                <option disabled>Erro ao carregar</option>
              ) : (
                locationsOptions.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))
              )}
            </select>
          </div>
          {/* Botões de Ação */}
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0 justify-center">
            <button
              className=" bg-white text-[#001449] text-[18px] py-2 px-4 rounded-[4px] hover:bg-gray-300 w-full md:w-auto"
              onClick={handleClearFilters}
            >
              Remover Filtros
            </button>
          </div>
        </div>
      </section>

      {/* --- Seção para Exibir os Cards das ONGs Filtradas --- */}
      <section className="container mx-auto p-4 md:p-8 max-w-6xl mt-8">
        <h2 className="text-[20px] font-bold mb-4">ONGs Encontradas:</h2>
        {loadingOngs ? (
          <p className="text-center text-gray-500">Carregando ONGs...</p>
        ) : errorOngs ? (
          <p className="text-center text-red-500">{errorOngs}</p>
        ) : filteredOngs.length > 0 ? (
          <div className="grid gap-6">
            {/* Renderiza APENAS os cards da página atual */}
            {currentOngsToDisplay.map(ong => (
              <OngCard
                key={ong.id}
                ong={ong}
                showActionButton={showActionButton}
                actionButtonText={actionButtonText}
                onActionClick={onActionClick}
              />
            ))}
          </div>
        ) : (
          <p className="text-[#001449] text-opacity-80 col-span-full text-center">Nenhuma ONG encontrada com os critérios de busca.</p>
        )}

{/* --- CONTROLES DE PAGINAÇÃO --- */}
        {totalPages > 1 && ( // Só mostra a paginação se houver mais de 1 página
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-5 py-2 text-[20px] text-white rounded-[4px] bg-blue-600 hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>

            {renderPageNumbers()} {/* Renderiza os números das páginas */}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-5 py-2 text-[20px] text-white rounded-[4px] bg-blue-600 hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Próximo
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default OngList;