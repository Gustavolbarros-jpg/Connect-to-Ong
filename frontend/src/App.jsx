import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import TokenExpiredModal from "./Components/TokenExpiredModal";
import { useIdleTimer } from "react-idle-timer";
import Navbar from "./Components/Navbar";

// Importações das páginas
import LoginPage from "./Pags/Auth/LoginPage.jsx";
import RegisterPage from "./Pags/Auth/RegisterPage.jsx";
import VerificationEmail from "./Pags/Auth/VerificationEmail.jsx";
import VerifyCode from "./Pags/Auth/VerifyCode.jsx";
import RecoverPasswordPage from "./Pags/Auth/RecoverPasswordPage.jsx";
import HomePage from "./Pags/Home/HomePage.jsx";
import StepeOnePage from "./Pags/ProjectPages/StepeOnePage.jsx";
import StepeTwoPage from "./Pags/ProjectPages/StepeTwoPage.jsx";
import StepeThreePage from "./Pags/ProjectPages/StepeThreePage.jsx";
import InfoPage from "./Pags/InfoPage/InfoPage.jsx";
import ProfilePage from "./Pags/ProfilePage/ProfilePage.jsx";
import OngPage from "./Pags/OngPage/OngPage.jsx";
import Dashboard from "./Pags/DashboardPage/Dashboard.jsx";

const IDLE_TIMEOUT = 30 * 60 * 1000;

function App() {
  const navigate = useNavigate();
  const [showTokenExpiredModal, setShowTokenExpiredModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const inactivityTimer = useRef(null);

  // ======================== FUNÇÃO DE LOGOUT CENTRALIZADA ========================
  const handleLogout = () => {
    console.log("🔒 [AUTH] Executando logout...");

    // Limpar storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Parar o timer de inatividade
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
      inactivityTimer.current = null;
      console.log("⏱️ [TIMER] Timer de inatividade parado");
    }

    // Atualizar estado
    setIsAuthenticated(false);

    // Redirecionar para a página de login
    navigate("/login");

    console.log("✅ [AUTH] Logout concluído");
  };

  // ======================== TIMER DE INATIVIDADE ========================
  const handleTokenExpired = () => {
    console.log("🛑 [TIMER] Token expirado por inatividade!");
    handleLogout();
    setShowTokenExpiredModal(true);
  };

  const handleSuccessfulLogin = () => {
    console.log("✅ [TIMER] Login realizado - NOVO TIMER INICIADO");
    setIsAuthenticated(true);
    setShowTokenExpiredModal(false);
  };

  // ======================== COMPONENTE DO TIMER ========================
  const IdleTimer = () => {
    const { getRemainingTime, reset } = useIdleTimer({
      timeout: IDLE_TIMEOUT,
      onIdle: handleTokenExpired,
      debounce: 500,
      startOnMount: true,
      stopOnIdle: false,
    });

    useEffect(() => {
      

      // Armazenar a referência do timer
      inactivityTimer.current = reset;

      // Timer no console para debug
      const debugInterval = setInterval(() => {
        const remaining = Math.ceil(getRemainingTime() / 1000);

        
      }, 1000);

      return () => {
        clearInterval(debugInterval);
        
      };
    }, [getRemainingTime, reset]);

    return null;
  };

  // ======================== CONTROLE DE AUTENTICAÇÃO ========================
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    const handleTokenExpiredEvent = () => {
      console.log("🎯 [EVENT] Evento tokenExpired recebido");
      handleTokenExpired();
    };

    const handleStorageChange = (e) => {
      if (e.key === "token") {
        console.log("💾 [EVENT] Alteração no token detectada");
        checkAuthStatus();
      }
    };

    window.addEventListener("tokenExpired", handleTokenExpiredEvent);
    window.addEventListener("storage", handleStorageChange);

    // Verificação inicial
    checkAuthStatus();

    return () => {
      window.removeEventListener("tokenExpired", handleTokenExpiredEvent);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // ======================== ROTAS ========================
  return (
    <>
      {/* Navbar com controle de autenticação */}
      <Navbar onLogout={handleLogout} />

      {/* Timer (só ativo quando logado) */}
      {isAuthenticated && <IdleTimer />}

      <Routes>
        <Route
          path="/login"
          element={<LoginPage onLogin={handleSuccessfulLogin} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verification-email" element={<VerificationEmail />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/recover-password" element={<RecoverPasswordPage />} />
        <Route path="/" element={<HomePage onLogout={handleLogout} />} />
        <Route
          path="/university"
          element={<InfoPage onLogout={handleLogout} />}
        />
        <Route
          path="/profile"
          element={<ProfilePage onLogout={handleLogout} />}
        />
        <Route path="/ongs" element={<OngPage onLogout={handleLogout} />} />
        <Route
          path="/stepe-one"
          element={<StepeOnePage onLogout={handleLogout} />}
        />
        <Route
          path="/stepe-two"
          element={<StepeTwoPage onLogout={handleLogout} />}
        />
        <Route
          path="/stepe-three"
          element={<StepeThreePage onLogout={handleLogout} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard onLougout={handleLogout} />}
        />
      </Routes>

      <TokenExpiredModal
        isOpen={showTokenExpiredModal}
        onClose={() => {
          console.log("🚪 [MODAL] Fechando modal - redirecionando para login");
          setShowTokenExpiredModal(false);
          navigate("/login");
        }}
      />
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
