import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "@pages/HomePage";
import { NotFoundPage } from "@pages/NotFoundPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
