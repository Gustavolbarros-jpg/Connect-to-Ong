import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 w-full z-50">
      <nav className="flex justify-center py-6 // font-semibold // shadow-lg">
        {/* Logo */}
        <div className="container my-auto flex justify-start ml-5">
          <a href="/" className="text-blue-600 font-bold text-[20px]">
            NDA
          </a>
        </div>

        {/* Pages */}
        <div className="container mx-auto flex justify-center">
          <ul className="hidden md:flex items-center gap-10">
            <li>
              <a
                href="/"
                className="text-white bg-blue-600 rounded-[4px] flex items-center justify-center py-2 px-5 hover:bg-blue-700 text-[20px]"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="/university"
                className="text-blue-600 hover:text-blue-800 text-[20px]"
              >
                Universidade
              </a>
            </li>
            <li>
              <a
                href="/ongs"
                className="text-blue-600 hover:text-blue-800 text-[20px]"
              >
                ONGs
              </a>
            </li>
          </ul>
        </div>

        {/* Login/Cadastro */}
        <div className="container mx-auto flex justify-end gap-10 mr-5">
          <a
            href="/login"
            className="text-blue-600 hover:text-blue-800 text-[20px] my-auto"
          >
            Login
          </a>
          <a
            href="/register"
            className="text-white bg-blue-600 rounded-[4px] flex items-center justify-center py-2 px-5 hover:bg-blue-700 text-[20px]"
          >
            Cadastre-se
          </a>
        </div>

        <div className="m:hideden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-600 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
