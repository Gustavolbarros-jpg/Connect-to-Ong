import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import menuIcon from "../assets/images/menuIcon.png";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  const activeLinkClasses =
    "text-white font-bold text-[20px] bg-blue-600 hover:bg-blue-800 py-2 px-5 rounded-[4px] decoration-blue-600";
  const inactiveLinkClasses =
    "text-blue-600 hover:text-blue-800 text-[20px] transition-colors duration-300";

  const ctaLinkClasses =
    "text-white bg-blue-600 rounded-[4px] py-2 px-5 hover:bg-blue-800 text-[20px] font-semibold";

  return (
    <header className="bg-white fixed top-0 w-full z-50">
      <nav className="relative flex items-center justify-between px-5 py-7 font-semibold shadow-lg">
        <div className="flex-shrink-0">
          <Link to="/" className="text-blue-600 font-bold text-[20px]">
            NDA
          </Link>
        </div>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/university"
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }
              >
                Universidade
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ongs"
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }
              >
                ONGs
              </NavLink>
            </li>
          </ul>
        </div>

        <div className=" hidden md:flex items-center justify-end gap-5 flex-shrink-0">
          {user ? (
            <div className="relative flex items-center gap-5">
              <span 
                className="text-blue-600 hover:text-blue-800 text-[20px] cursor-pointer inline-flex items-center" /* <<< Adicionado inline-flex e items-center */
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                Olá, {user.name || "Usuário"}! 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true" 
                className="w-8 h-8">
                  <path d="M7 10l5 5 5-5H7z" /> 
                </svg>
              </span>
              
            {/* 👇 ADICIONADO O LINK "CRIAR PROJETO" PARA DESKTOP AQUI 👇 */}
            {user && (
                <NavLink to="/stepe-one" className={ctaLinkClasses}>
                  Criar Projeto
                </NavLink>
            )}
              
              {isProfileOpen && (
                <div className="font-bold absolute top-full right-0 mt-6 mr-48 w-48 bg-white shadow-glow rounded-[4px] py-1 z-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-[20px] text-blue-600 hover:tex-blue-800 hover:bg-gray-100"
                  >
                    Meu Perfil
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-[20px] text-red-600 hover:bg-gray-100"
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-800 text-[20px]"
              >
                Acessar Conta
              </Link>
              <Link
                to="/register"
                className="text-white bg-blue-600 rounded-[4px] py-2 px-5 hover:bg-blue-800 text-[20px]"
              >
                Cadastre-se
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
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

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-5 pb-5 absolute top-full left-0 w-full">
          <ul className="text-[20px] font-bold flex flex-col items-center gap-4 pt-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-blue-600 py-2 px-5 rounded-[4px] text-white hover:bg-blue-800" : "text-blue-600 hover:text-blue-800"
                }
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/university"
                className={({ isActive }) =>
                  isActive ? "bg-blue-600 py-2 px-5 rounded-[4px] text-white hover:bg-blue-800" : "text-blue-600 hover:text-blue-800"
                }
              >
                Universidade
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ongs"
                className={({ isActive }) =>
                  isActive ? "bg-blue-600 py-2 px-5 rounded-[4px] text-white hover:bg-blue-800" : "text-blue-600 hover:text-blue-800"
                }
              >
                ONGs
              </NavLink>
            </li>

            {/* 👇 ADICIONADA A VERIFICAÇÃO "user &&" NO LINK MOBILE TAMBÉM 👇 */}
            {user && (
              <li>
                <NavLink to="/stepe-one" className="text-white bg-blue-600 hover:bg-blue-800 font-bold bg-black py-2 px-5 rounded-[4px]">
                  Criar Projeto
                </NavLink>
              </li>
            )}
          </ul>
          <div className="border-t border-gray-200 mt-4 pt-4 flex flex-col items-center gap-4">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="text-blue-600 font-bold text-[20px] hover:text-blue-800"
                >
                  Meu Perfil
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-500 font-bold text-[20px]"
                >
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-bold text-[20px]">
                  Acessar Contar
                </Link>
                <Link
                  to="/register"
                  className="w-full text-center font-bold text-white bg-blue-600 rounded-[4px] py-2 px-5 hover:bg-blue-800 text-[20px]"
                >
                  Cadastre-se
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
