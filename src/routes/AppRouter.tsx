import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "@/pages/DashboardPage";
import CategoryDetailPage from "@/pages/CategoryDetailPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/detalle/:year/:month/:categoryId" element={<CategoryDetailPage />} />
        {/* Puedes agregar más rutas protegidas o públicas aquí */}
      </Routes>
    </BrowserRouter>
  );
}
