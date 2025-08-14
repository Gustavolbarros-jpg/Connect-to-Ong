import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import logoImage from "../assets/images/logoImage.png";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Estado para o utilizador, inicializado a partir do localStorage
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      return null;
    }
  });

  // Este useEffect "ouve" por alterações no estado de autenticação
  useEffect(() => {
    const handleAuthChange = () => {
      try {
        const savedUser = localStorage.getItem("user");
        setUser(savedUser ? JSON.parse(savedUser) : null);
      } catch (error) {
        console.error("Failed to parse user from localStorage on auth change", error);
        setUser(null);
      }
    };

    // Adiciona um listener para o nosso evento customizado
    window.addEventListener('auth-change', handleAuthChange);

    // Limpa o listener quando o componente é desmontado para evitar fugas de memória
    return () => {
      window.removeEventListener('auth-change', handleAuthChange);
    };
  }, []); // O array de dependências vazio garante que isto só corre uma vez

  // Efeito para fechar os menus dropdown quando se clica fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile-menu-container')) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
    window.dispatchEvent(new Event('auth-change'));
    
    navigate("/login");
  }

  // Estilos originais mantidos
  const activeLinkClasses = "text-white font-bold text-[20px] bg-blue-600 hover:bg-blue-800 py-2 px-5 rounded-[4px]";
  const inactiveLinkClasses = "text-blue-600 hover:text-blue-800 text-[20px] transition-colors duration-300";
  const ctaLinkClasses = "text-white bg-blue-600 rounded-[4px] py-2 px-5 hover:bg-blue-800 text-[20px] font-semibold";

  return (
    <header className="bg-white fixed top-0 w-full z-50">
      <nav className="flex items-center justify-between px-5 py-7 font-semibold shadow-lg mx-auto">
      <div className="flex-shrink-0">
          {/* --- ALTERAÇÃO AQUI: O TEXTO FOI SUBSTITUÍDO PELA IMAGEM E TEXTO ALINHADOS --- */}
          <Link to="/" className="flex items-center"> {/* Use 'items-center' para alinhar verticalmente e 'gap' para espaçamento */}
            <img src={logoImage} alt="Logo Connect to ONGs" className="h-12" /> {/* Ajuste a altura (h-12) conforme necessário */}
            <div className="text-blue-600 font-bold leading-tight"> {/* 'leading-tight' para juntar as linhas */}
              <h1 className="-mb-1">Connect</h1>
              <h1 className="-mb-1">to</h1>
              <h1 className="-mb-1">ONG</h1>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex flex-grow justify-center pl-[150px]">
          <ul className="flex items-center gap-10">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? activeLinkClasses : inactiveLinkClasses}>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink to="/university" className={({ isActive }) => isActive ? activeLinkClasses : inactiveLinkClasses}>
                Universidade
              </NavLink>
            </li>
            <li>
              <NavLink to="/ongs" className={({ isActive }) => isActive ? activeLinkClasses : inactiveLinkClasses}>
                ONGs
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center justify-end gap-5 flex-shrink-0">
          {user ? (
            <>
              <div className="relative profile-menu-container">
                 <button 
                  className="text-blue-600 hover:text-blue-800 text-[20px] inline-flex items-center"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  Olá, {user.fullname ? user.fullname.split(' ')[0] : "Usuário"}!
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8">
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </button>
                {isProfileOpen && (
                  <div className="font-bold absolute top-full right-0 mt-6 w-48 bg-white shadow-lg rounded-[4px] py-1 z-20 border">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-[20px] text-blue-600 hover:bg-gray-100"
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
              <NavLink to="/stepe-one" className={ctaLinkClasses}>
                Criar Projeto
              </NavLink>
            </>
          ) : (
            <>
              <Link to="/login" className="text-blue-600 hover:text-blue-800 text-[20px]">
                Acessar Conta
              </Link>
              <Link to="/register" className="text-white bg-blue-600 rounded-[4px] py-2 px-5 hover:bg-blue-800 text-[20px]">
                Cadastre-se
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-5 pb-5 absolute top-full left-0 w-full">
          <ul className="text-[20px] font-bold flex flex-col items-center gap-4 pt-4">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "bg-blue-600 py-2 px-5 rounded-[4px] text-white hover:bg-blue-800" : "text-blue-600 hover:text-blue-800"} onClick={() => setIsOpen(false)}>Início</NavLink></li>
            <li><NavLink to="/university" className={({ isActive }) => isActive ? "bg-blue-600 py-2 px-5 rounded-[4px] text-white hover:bg-blue-800" : "text-blue-600 hover:text-blue-800"} onClick={() => setIsOpen(false)}>Universidade</NavLink></li>
            <li><NavLink to="/ongs" className={({ isActive }) => isActive ? "bg-blue-600 py-2 px-5 rounded-[4px] text-white hover:bg-blue-800" : "text-blue-600 hover:text-blue-800"} onClick={() => setIsOpen(false)}>ONGs</NavLink></li>
            {user && (
              <li><NavLink to="/stepe-one" className="text-white bg-blue-600 hover:bg-blue-800 font-bold py-2 px-5 rounded-[4px]" onClick={() => setIsOpen(false)}>Criar Projeto</NavLink></li>
            )}
          </ul>
          <div className="border-t border-gray-200 mt-4 pt-4 flex flex-col items-center gap-4">
            {user ? (
              <>
                <Link to="/profile" className="text-blue-600 font-bold text-[20px] hover:text-blue-800" onClick={() => setIsOpen(false)}>Meu Perfil</Link>
                <button onClick={() => { handleLogout(); setIsOpen(false); }} className="text-red-500 font-bold text-[20px]">Sair</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-bold text-[20px]" onClick={() => setIsOpen(false)}>Acessar Conta</Link>
                <Link to="/register" className="w-full text-center font-bold text-white bg-blue-600 rounded-[4px] py-2 px-5 hover:bg-blue-800 text-[20px]" onClick={() => setIsOpen(false)}>Cadastre-se</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;