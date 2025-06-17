import DashboardPage from "@pages/DashboardPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                {/* <Route path="/login" element={<LoginPage />} /> */}
                {/* <Route path="/register" element={<RegisterPage />} /> */}
                {/* <Route path="/detalle/:year/:month/:categoryId" element={<CategoryDetailPage />} /> */}
                {/* Puedes agregar más rutas protegidas o públicas aquí */}
            </Routes>
        </BrowserRouter>
    );
}
