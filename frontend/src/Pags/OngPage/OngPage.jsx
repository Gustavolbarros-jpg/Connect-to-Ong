// src/pages/OngPage.jsx
import React, { useState } from "react";
import Navbar from "../../Components/Navbar/"; // Ajuste o caminho se necessário
import Footer from "../../Components/Footer/"; // Ajuste o caminho se necessário
import OngList from "../../Components/OngList"; // Importa o componente autônomo OngList
import OngDetailModal from "../../Components/OngDetailModal"; // Para exibir os detalhes
import BGImage from "../../assets/images/OngPage/bgImage.png"; // Imagem do cabeçalho

/**
 * OngPage: A página principal para descobrir e pesquisar ONGs.
 * Ela usa o componente OngList para exibir os dados e gerencia
 * a abertura do modal de detalhes.
 */
function OngPage() {
    // Estado para controlar qual ONG está selecionada para ver os detalhes no modal
    const [selectedOng, setSelectedOng] = useState(null);

    // Função para abrir o modal. Será passada como prop para o OngList.
    const handleOpenDetails = (ong) => {
        console.log("Abrindo detalhes para:", ong);
        setSelectedOng(ong);
    };

    // Função para fechar o modal
    const handleCloseDetails = () => {
        setSelectedOng(null);
    };

    return (
        <div className="font-roboto h-full min-h-screen w-full bg-[#F4F0F0] text-[#001449]">
            <Navbar />
            
            <main className="w-full pt-16 md:pt-20 lg:pt-24 pb-12">
                {/* Seção do cabeçalho com imagem de fundo e título */}
                <section className="flex justify-start items-center // text-white // w-full h-[300px] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url('${BGImage}')` }} >
                    <div className=" z-10 h-full w-full max-w-[1500px] flex items-center bg-gradient-to-r from-[#001449BF] via-[#1A3A8FBF] via-[80%] font-roboto">
                        <h1 className="text-[36px] pl-12 pt-24 font-bold pb-4">Conecte a extensão da sua Universidade a causas que transformam.</h1>
                    </div>
                </section>
                <OngList 
                    showActionButton={true}
                    actionButtonText="Ver Detalhes"
                    onActionClick={handleOpenDetails}
                />

                {selectedOng && (
                    <OngDetailModal 
                        ong={selectedOng} 
                        onClose={handleCloseDetails} 
                    />
                )}
            </main>

            <Footer />
        </div>
    );
}

export default OngPage;
