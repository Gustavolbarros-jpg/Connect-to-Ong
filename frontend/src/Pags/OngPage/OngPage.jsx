import React, { useState } from "react";

import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";

function OngPage() {
    return (
        <div className="font-roboto h-screen text-[#001449]">
            <Navbar />
            <main className="min-h-screen min-w-screem bg-[#F4F0F0] // flex justify-center items-center">
                <section className="container p-4 md:p-8 max-w-6xl">
                        <div className="relative mb-4 text-gray-400">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <img src="" alt="" className="h-5 w-5"/>
                            </div>
                            <input type="text" placeholder="Você tem interesse em uma ONG's específica, pesquise aqui..." className="w-full text-xs md:text-[20px] p-3 pl-10 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between md:gap-4 md:text-[20px]">
                            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                                <select className="form-select border border-gray-300 rounded-[4px] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto">
                                    <option>Área de Atuação</option>
                                    <option>Educação</option>
                                    <option>Saúde</option>
                                    <option>Meio Ambiente</option>
                                </select>
                                <select className="form-select border border-gray-300 rounded-[4px] py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto">
                                    <option>Localidade</option>
                                    <option>Recife</option>
                                    <option>Olinda</option>
                                    <option>Jaboatão</option>
                                </select>
                            </div>
                            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0 justify-center">
                                <button className="bg-white py-2 px-4 rounded-[4px] hover:bg-gray-300 w-full md:w-auto">Remover Filtros</button>
                                <button className="bg-[#1474FF] text-white py-2 px-4 rounded-[4px] hover:bg-blue-700 w-full md:w-auto">Filtrar</button>
                            </div>
                        </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default OngPage;