import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SummaryPage from "../pages/SummaryPage";
import PrivateRoute from "./PrivateRoute";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/NavBar";

export default function AppRouter() {
	const location = useLocation();
	const { isLogged, isLoading } = useContext(AuthContext);

	if (isLoading) return null;

	// Ocultar el navbar en login/register
	const hideNavbar = location.pathname.startsWith("/authentication");

	return (
		<>
			{!hideNavbar && <Navbar />}
			<Routes>
				<Route path="/" element={<Navigate to="/authentication/register" replace />} />

				<Route
					path="/authentication/login"
					element={
						isLogged ? <Navigate to="/expenses_summary" replace /> : <LoginPage />
					}
				/>

				<Route
					path="/authentication/register"
					element={
						isLogged ? <Navigate to="/expenses_summary" replace /> : <RegisterPage />
					}
				/>

				<Route
					path="/expenses_summary"
					element={
						<PrivateRoute>
							<SummaryPage />
						</PrivateRoute>
					}
				/>

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</>
	);
}