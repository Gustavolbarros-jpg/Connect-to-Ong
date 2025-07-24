import React, { useState, useEffect } from "react";

import lupa from "../../assets/images/OngPage/lupa.png";

import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import OngCard from "../../Components/OngCard";

// --- Simulação de Dados do Banco de Dados (será substituído pela chamada à API) ---
const allOngsData = [
  { id: 1, logo: '/logo-ong-placeholder.png', name: "Grupo Paz e Amor", subtitle: "Desenvolvimento Sustentável", description: "Desde 1987, o Grupo Paz e Amor transforma a vida da melhor idade, combatendo o isolamento e promovendo saúde e alegria. Nosso propósito é simples, mas poderoso: tirar os idosos de casa, movimentar corpos e conectar corações, fortalecendo laços comunitários e oferecendo dignidade. Realizamos atividades recreativas, apoio psicológico e oficinas de bem-estar para que a terceira idade viva com plenitude.", area: "Saúde", location: "Recife"},
  { id: 2, logo: '/logo-ong-placeholder.png', name: "ONG Verde Esperança", subtitle: "Consciência Ambiental", description: "Focada na recuperação de áreas verdes urbanas e educação ambiental, promove a conscientização da comunidade sobre a importância da sustentabilidade. Nossos projetos envolvem plantio de árvores, limpeza de rios e palestras educativas em escolas e comunidades. Acreditamos que a mudança começa com a educação e a ação local.", area: "Meio Ambiente", location: "Olinda"},
  { id: 3, logo: '/logo-ong-placeholder.png', name: "Educação para o Futuro", subtitle: "Apoio Educacional", description: "Oferece reforço escolar e atividades culturais para crianças e adolescentes em situação de vulnerabilidade. Nosso objetivo é complementar a educação formal, oferecendo um ambiente seguro e estimulante para o desenvolvimento integral dos jovens. Contamos com voluntários e parceiros para expandir nosso alcance.", area: "Educação", location: "Recife"},
  { id: 4, logo: '/logo-ong-placeholder.png', name: "Mãos Solidárias", subtitle: "Assistência Comunitária", description: "Apoio a famílias em situação de vulnerabilidade social com doações de alimentos, roupas, itens de higiene e assistência jurídica básica. Atuamos em comunidades carentes, promovendo dignidade e esperança para aqueles que mais precisam. Nosso trabalho é feito por meio de campanhas e ações diretas no território.", area: "Assistência Social", location: "Jaboatão"},
  { id: 5, logo: '/logo-ong-placeholder.png', name: "Lar dos Idosos Feliz", subtitle: "Cuidado e Afeto", description: "Abrigo e cuidado para idosos sem suporte familiar, com atividades recreativas, fisioterapia e acompanhamento médico. Nosso lar proporciona um ambiente acolhedor e seguro, onde a dignidade e o bem-estar dos nossos residentes são a prioridade.", area: "Saúde", location: "Recife"},
];

// Dados mockados para as opções dos filtros (viriam de API reais)
const mockAreas = ["Educação", "Saúde", "Meio Ambiente", "Assistência Social"];
const mockLocations = ["Recife", "Olinda", "Jaboatão", "Pina"];


function OngPage() {

    // --- Estados para Lógica de Pesquisa e Filtro ---
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedArea, setSelectedArea] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");

    const [allOngs, setAllOngs] = useState([]); // Estado para guardar TODAS as ONGs
    const [filteredOngs, setFilteredOngs] = useState([]); // Estado para guardar as ONGs FILTRADAS

    const [loadingOngs, setLoadingOngs] = useState(true); // Estado para indicar carregamento das ONGs
    const [errorOngs, setErrorOngs] = useState(null); // Estado para erros no carregamento das ONGs

    // --- Novos Estados para as OPÇÕES dos Filtros Dinâmicos ---
    const [areasOptions, setAreasOptions] = useState([]); // Opções para Área
    const [locationsOptions, setLocationsOptions] = useState([]); // Opções para Localidade

    const [loadingFilterOptions, setLoadingFilterOptions] = useState(true); // Estado para carregamento das opções
    const [errorFilterOptions, setErrorFilterOptions] = useState(null); // Estado para erros nas opções

    // --- useEffect para Carregar ONGs e Opções de Filtro ---
    useEffect(() => {
        const fetchData = async () => {
            setLoadingOngs(true);
            setLoadingFilterOptions(true);
            setErrorOngs(null);
            setErrorFilterOptions(null);

            try {
                // *** 1. Buscar as ONGs ***
                // Chamar à API:
                // const ongsResponse = await fetch('/api/ongs');
                // if (!ongsResponse.ok) throw new Error('Falha ao carregar ONGs');
                // const ongsData = await ongsResponse.json();
                const ongsData = await new Promise(res => setTimeout(() => res(allOngsData), 500)); // Simula API com atraso

                setAllOngs(ongsData);
                setFilteredOngs(ongsData);

                // *** 2. Buscar Opções de Filtros (Áreas, Localidades) ***
                // Isso poderia ser uma única chamada à API que retorna todas as opções de filtro
                // ou chamadas separadas.
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
    }, []); // Array de dependências vazio: executa apenas uma vez ao montar o componente

    useEffect(() => {
        let currentOngs = [...allOngs]; // Cria uma cópia para filtrar

        // Filtro por termo de busca (nome ou descrição)
        if (searchTerm) {
            currentOngs = currentOngs.filter(ong =>
                ong.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                ong.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filtros pelos dropdowns (Área, Localidade)
        if (selectedArea && selectedArea !== "") {
            currentOngs = currentOngs.filter(ong => ong.area === selectedArea);
        }
        if (selectedLocation && selectedLocation !== "") {
            currentOngs = currentOngs.filter(ong => ong.location === selectedLocation);
        }

        setFilteredOngs(currentOngs); // Atualiza a lista de ONGs exibidas

    }, [searchTerm, selectedArea, selectedLocation, allOngs]); // Dependências: re-executa quando um desses estados ou 'allOngs' muda

    // --- Funções para Lidar com Mudanças nos Inputs/Selects ---
    const handleSearchChange = (event) => setSearchTerm(event.target.value);
    const handleAreaChange = (event) => setSelectedArea(event.target.value);
    const handleLocationChange = (event) => setSelectedLocation(event.target.value);

    // Função para limpar todos os filtros e a busca
    const handleClearFilters = () => {
        setSearchTerm("");
        setSelectedArea("");
        setSelectedLocation("");
    };

    return (
        <div className="font-roboto h-screen w-full text-[#001449]">
            <Navbar /> 
            <main className="min-h-screen w-full bg-[#F4F0F0] pt-16 md:pt-20 lg:pt-24">
                <section className="container mx-auto p-4 md:p-8 max-w-6xl rounded-lg mt-4">
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <img src="" alt="" className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"/>
                        </div>
                        <input type="text" placeholder="Você tem interesse em uma ONG's específica, pesquise aqui..."className="w-full text-xs md:text-base p-3 pl-10 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"value={searchTerm } onChange={handleSearchChange}/>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
                        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">

                            <select className="form-select border border-gray-300 rounded-[4px] bg-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto" value={selectedArea} onChange={handleAreaChange}>
                                <option value="">Área de Atuação</option>
                                {loadingFilterOptions ? (<option disabled>Carregando...</option>) : 
                                errorFilterOptions ? (<option disabled>Erro ao carregar</option>) : 
                                (areasOptions.map(area => (<option key={area} value={area}>{area}</option>)))}
                            </select>

                            <select className="form-select border border-gray-300 rounded-[4px] bg-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto" value={selectedLocation} onChange={handleLocationChange}>
                                <option value="">Localidade</option>
                                {loadingFilterOptions ? (<option disabled>Carregando...</option>) : 
                                errorFilterOptions ? ( <option disabled>Erro ao carregar</option>) : 
                                (locationsOptions.map(location => ( <option key={location} value={location}>{location}</option>)))}
                            </select>

                        </div>
                        {/* Botões de Ação */}
                        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0 justify-center">
                            <button className="bg-gray-200 text-gray-800 bg-white py-2 px-4 rounded-[4px] hover:bg-gray-300 w-full md:w-auto" onClick={handleClearFilters}>Remover Filtros</button>
                        </div>
                    </div>
                </section>

                {/* --- Seção para Exibir os Cards das ONGs Filtradas --- */}

                <section className="container mx-auto p-4 md:p-8 max-w-6xl mt-8 ">
                    {loadingOngs && <p className="text-center text-gray-500">Carregando ONGs...</p>}
                    {errorOngs && <p className="text-center text-red-500">{errorOngs}</p>}
                    {!loadingOngs && !errorOngs && filteredOngs.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6">
                        {filteredOngs.map(ong => (<OngCard key={ong.id} ong={ong} /> ))}
                        </div>) : 
                        (!loadingOngs && !errorOngs && <p className="text-gray-500 col-span-full text-center">Nenhuma ONG encontrada com os critérios de busca.</p>)}
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default OngPage;