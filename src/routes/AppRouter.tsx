import DashboardPage from "@pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CategoryDetailPage from "@pages/CategoryDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/login" element={<LoginPage />} /> 
                <Route path="/register" element={<RegisterPage />} /> 
                <Route path="/detalle/:year/:month/:categoryId" element={<CategoryDetailPage />} /> 
                
            </Routes>
        </BrowserRouter>
    );
}
