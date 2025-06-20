import Api from "../../services/api";
import { AuthResponse } from "src/interface/auth/AuthResponse";
import { LoginRequest } from "src/interface/auth/LoginRequest";

export async function login(loginRequest: LoginRequest): Promise<AuthResponse> {
	try {
		const api = await Api.getInstance();

		const response = await api.post<LoginRequest, AuthResponse>({
			url: "/authentication/login",
			data: loginRequest,
			headers:{
				'Accept': 'application/json'
			}
		});

		if (response.data?.token) {
			api.authorization = response.data.token;
		}

		return response.data;
	} catch (error) {
		console.error("Error detallado:", error);

		if (error.response) {
			if (error.response.status === 401) {
				throw new Error("Credenciales incorrectas");
			}
		}
		throw new Error("Error al iniciar sesión");
	}
}