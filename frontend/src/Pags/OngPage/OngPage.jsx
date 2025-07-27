import React, { useState, useEffect } from "react";

import lupa from "../../assets/images/OngPage/lupa.png";

import Navbar from "../../Components/Navbar/";
import Footer from "../../Components/Footer/";
import OngList from "../../Components/OngList";

function OngPage() {

    return (
        <div className="font-roboto h-screen w-full">
            <Navbar /> 
            <main className="w-full h-[200px]">

            </main>
            <OngList />
            <Footer />
        </div>
    );
}

export default OngPage;