import { ChangeEvent, FormEvent, useState, useContext } from "react";
import { login as loginService } from "../services/auth/login";
import { LoginRequest } from "../interface/auth/LoginRequest";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";


export default function LoginForm() {
	const [formData, setFormData] = useState<LoginRequest>({
		email: "",
		passwd: ""
	});

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { login } = useContext(AuthContext); // login del context
	const navigate = useNavigate();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
		setError("");
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await loginService(formData);
			login(response.token);
			navigate("/expenses_summary");
		} catch (err) {
			if (err instanceof AxiosError) {
				const msg = err.response?.data?.message || "Error en la petición";
				setError(msg);
			} else if (err instanceof Error) {
				setError(err.message);
			} else {
				setError("Ocurrió un error inesperado");
			}
		}
	};

	return (
		<div className="max-w-md mx-auto p-6 bg-white rounded-lg">
			<form onSubmit={handleSubmit} className="space-y-3">
				<div>
					<label htmlFor="email" className="block mb-1 font-medium">
						Email
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full p-2 border rounded mt-1"
							required
						/>
					</label>
				</div>

				<div>
					<label htmlFor="passwd" className="block mb-1 font-medium">
						Contraseña
						<input
							type="password"
							id="passwd"
							name="passwd"
							value={formData.passwd}
							onChange={handleChange}
							className="w-full p-2 border rounded mt-1"
							required
						/>
					</label>
				</div>

				<button
					type="submit"
					disabled={loading}
					className={`w-full py-2 px-4 rounded text-white ${
						loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
					}`}
				>
					{loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
				</button>
			</form>

			{error && (
				<div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
					{error}
				</div>
			)}
		</div>
	);
}
