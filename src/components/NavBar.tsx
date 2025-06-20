import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
	const { isLogged, logout } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/authentication/login");
	};

	return (
		<nav className="w-full bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
			<Link to="/" className="text-lg font-bold hover:underline">
				MiApp
			</Link>

			<div className="flex items-center gap-4">
				{isLogged ? (
					<>
						<Link to="/expenses_summary" className="hover:underline">
							Resumen
						</Link>
						<button
							onClick={handleLogout}
							className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-100 transition"
						>
							Cerrar sesión
						</button>
					</>
				) : (
					<>
						<Link to="/authentication/login" className="hover:underline">
							Iniciar sesión
						</Link>
						<Link to="/authentication/register" className="hover:underline">
							Registrarse
						</Link>
					</>
				)}
			</div>
		</nav>
	);
}
