import React, { useState } from "react";

import Navbar from "../../Components/Navbar/";

function OngPage() {
    return(
        <div className="font-roboto h-screen text-[#001449]">
            <Navbar />
            <main className="min-h-screen min-w-screem bg-[#F4F0F0] // flex justify-center items-center">
                <section className="pt-6 ">
                    <div className="w-full h-[60px]">
                        <input type="text" className="w-full"/>
                        <div>
                            <select name="" id="">
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                            <select name="" id="">

                            </select>
                            <select name="" id="">
                                
                            </select>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default OngPage;