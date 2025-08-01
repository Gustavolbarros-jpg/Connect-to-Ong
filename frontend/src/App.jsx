import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenExpiredModal from './Components/TokenExpiredModal';
// Initialize interceptors
import './api/tokenInterceptor';

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

function App() {
  const [showTokenExpiredModal, setShowTokenExpiredModal] = useState(false);

  useEffect(() => {
    // Listen for token expired events
    const handleTokenExpired = () => {
      setShowTokenExpiredModal(true);
    };

    window.addEventListener('tokenExpired', handleTokenExpired);

    return () => {
      window.removeEventListener('tokenExpired', handleTokenExpired);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verification-email" element={<VerificationEmail />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/recover-password" element={<RecoverPasswordPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/university" element={<InfoPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/ongs" element={<OngPage />} />
        <Route path="/stepe-one" element={<StepeOnePage />} />
        <Route path="/stepe-two" element={<StepeTwoPage />} />
        <Route path="/stepe-three" element={<StepeThreePage />} />
      </Routes>

      <TokenExpiredModal 
        isOpen={showTokenExpiredModal} 
        onClose={() => setShowTokenExpiredModal(false)} 
      />
    </BrowserRouter>
  );
}

export default App; 