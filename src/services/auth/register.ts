import Api from "@services/api";
import { RegisterRequest } from "src/interface/auth/RegisterRequest";
import axios from "axios";

export async function register(registerRequest: RegisterRequest) {
    try {
        const api = await Api.getInstance();
        await api.post<RegisterRequest, void>(
            registerRequest, { url: "/authentication/register" }
        )
    } catch (error: any) {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 400) {
					throw new Error("El correo ya está registrado.");
				} else {
					throw new Error("Error del servidor. Intenta más tarde.");
				}
			}
			throw new Error("Error desconocido.");
		}
}