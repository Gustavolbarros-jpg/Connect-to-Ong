import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import LoginPage from "./Pags/Auth/LoginPage.jsx";
import RegisterPage from "./Pags/Auth/RegisterPage.jsx";
import VerificationEmail from "./Pags/Auth/VerificationEmail.jsx";
import VerifyCode from "./Pags/Auth/VerifyCode.jsx";
import RecoverPasswordPage from "./Pags/Auth/RecoverPasswordPage.jsx";
import HomePage from "./Pags/Home/HomePage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verification-email" element={<VerificationEmail />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/recover-password" element={<RecoverPasswordPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
