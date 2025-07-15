import React from "react";

function Navbar() {
  return (
    <header className="bg-white border-b fixed top-0 w-full z-50">
      <nav className="relative py-6">
        <div className="container mx-auto flex justify-center items-center">
          <ul className="hidden md:flex items-center space-x-10">
            <li>
              <a
                href="#"
                className="text-white font-semibold bg-blue-600 rounded-[8px] flex items-center justify-center py-2 px-5 text-[20px]"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-800 text-[22px]"
              >
                Universidade
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-800 text-[22px]"
              >
                ONGs
              </a>
            </li>
          </ul>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center space-x-4">
          <a
            href="/login"
            className="text-blue-600 font-semibold hover:text-blue-800 text-[22px]"
          >
            Login
          </a>
          <a
            href="/register"
            className="text-white bg-blue-600 rounded-[8px] flex items-center justify-center py-2 px-5 hover:bg-blue-700 text-[22px]"
          >
            Cadastre-se
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
