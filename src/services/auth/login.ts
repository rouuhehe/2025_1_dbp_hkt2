import { AuthResponse } from "src/interface/auth/AuthResponse";
import Api from "../../services/api";
import { LoginRequest } from "src/interface/auth/LoginRequest";

export async function login(loginRequest: LoginRequest): Promise<AuthResponse> {
    try {
        const api = await Api.getInstance();
        
        const response = await api.post<LoginRequest, AuthResponse>({
            url: "/authentication/login",
            data: loginRequest
        });

        if (response.data?.token) {
            api.authorization = response.data.token;
        }

        return response.data;
    } catch (error) {
        console.error("Error detallado:", error);
        throw new Error("Login Fallido!");
    }
}