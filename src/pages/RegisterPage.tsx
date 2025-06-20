import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { RegisterRequest } from "../interface/auth/RegisterRequest";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [formData, setFormData] = useState<RegisterRequest>({
        email: "",
        passwd: ""
    })

	const navigate = useNavigate();

	return (
		<main className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
				<h1 className="text-2xl font-bold text-center mb-6">Registrarse</h1>
				<RegisterForm formData={formData} setFormData={setFormData} />

				<p className="mt-6 text-center text-sm text-gray-600">
					¿Ya tienes una cuenta?{" "}
					<button
						onClick={() => navigate("/authentication/login")}
						className="text-blue-600 hover:underline"
					>
						Inicia sesión
					</button>
				</p>
			</div>
		</main>
	);
}