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
                <Route path="authentication/login" element={<LoginPage />} /> 
                <Route path="authentication/register" element={<RegisterPage />} /> 
                <Route path="/detalle/:year/:month/:categoryId" element={<CategoryDetailPage />} /> 
                
            </Routes>
        </BrowserRouter>
    );
}
