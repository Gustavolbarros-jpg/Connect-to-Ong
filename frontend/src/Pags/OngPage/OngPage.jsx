import React, { useState, useEffect } from "react";

import BGImage from "../../assets/images/OngPage/BGImage.png";


import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import OngList from "../../Components/OngList";

function OngPage() {

    return (
        <div className="font-roboto h-screen w-full">
            <Navbar />
            <main className="bg-[#F4F0F0]">
                <section className="flex justify-start items-center // text-white // w-full h-[300px] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url('${BGImage}')` }} >
                    <div className=" z-10 h-full w-full max-w-[1500px] flex items-center bg-gradient-to-r from-[#001449BF] via-[#1A3A8FBF] via-[80%] font-roboto">
                        <h1 className="text-[36px] pl-12 pt-24 font-bold pb-4">Conecte a extensão da sua Universidade a causas que transformam.</h1>
                    </div>
                </section>
                <OngList />
            </main>
            <Footer />
        </div>
    );
}

export default OngPage;