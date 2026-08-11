import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "@pages/HomePage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { SignUpPage } from "@pages/SignUpPage";
import { PasswordRecoveryPage } from "@pages/PasswordRecoveryPage";
import { LoginPage } from "@pages/LoginPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<PasswordRecoveryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
