import Api from "../../services/api";
import { AuthResponse } from "src/interface/auth/AuthResponse";
import { RegisterRequest } from "src/interface/auth/RegisterRequest";

export async function register(registerRequest: RegisterRequest): Promise<AuthResponse> {
	try {
		const api = await Api.getInstance();

		const response = await api.post<RegisterRequest, AuthResponse>({
			url: "/authentication/register",
			data: registerRequest
		});

		if (response.data?.token) {
			api.authorization = response.datatoken;
		}

		return response.data;
	} catch (error) {
		console.error("Error detallado:", error);

		if (error.response) {
			if (error.response.status === 400) {
				throw new Error("El correo ya está registrado");
			}
		} else {
			throw new Error("Registro Fallido!");
		}
	}
}