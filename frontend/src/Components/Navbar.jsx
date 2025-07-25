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
    "text-blue-600 font-bold text-[22px] underline decoration-blue-600 decoration-2 underline-offset-4";
  const inactiveLinkClasses =
    "text-gray-600 hover:text-blue-600 text-[22px] transition-colors duration-300";

  const ctaLinkClasses =
    "text-white bg-blue-600 rounded-[4px] py-2 px-5 hover:bg-blue-700 text-[20px] font-semibold";

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

            {/* 👇 ADICIONADO O LINK "CRIAR PROJETO" PARA DESKTOP AQUI 👇 */}
            {user && (
              <li>
                <NavLink to="/stepe-one" className={ctaLinkClasses}>
                  Criar Projeto
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="hidden md:flex items-center justify-end gap-5 flex-shrink-0">
          {user ? (
            <div className="relative flex items-center gap-2">
              <span className="text-gray-700 text-[20px]">
                Olá, {user.name || "Usuário"}!
              </span>
              <img
                src={menuIcon}
                alt="Menu do Perfil"
                title="Menu do Perfil"
                className="h-10 w-10 cursor-pointer mx-4 transition-transform hover:scale-110 ml-2"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              />
              {isProfileOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-[18px] text-gray-700 hover:bg-gray-100"
                  >
                    Meu Perfil
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-[18px] text-red-600 hover:bg-gray-100"
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
                Login
              </Link>
              <Link
                to="/register"
                className="text-white bg-blue-600 rounded-[4px] py-2 px-5 hover:bg-blue-700 text-[20px]"
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
          <ul className="flex flex-col items-center gap-4 pt-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-600" : "text-gray-700"
                }
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/university"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-600" : "text-gray-700"
                }
              >
                Universidade
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ongs"
                className={({ isActive }) =>
                  isActive ? "font-bold text-blue-600" : "text-gray-700"
                }
              >
                ONGs
              </NavLink>
            </li>

            {/* 👇 ADICIONADA A VERIFICAÇÃO "user &&" NO LINK MOBILE TAMBÉM 👇 */}
            {user && (
              <li>
                <NavLink to="/stepe-one" className="text-blue-600 font-bold">
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
                  className="text-blue-600 font-bold text-lg hover:text-blue-800"
                >
                  Meu Perfil
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-500 font-bold text-lg"
                >
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-blue-600 font-bold text-lg">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="w-full text-center text-white bg-blue-600 rounded-[4px] py-2 px-5 hover:bg-blue-700 text-lg"
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
