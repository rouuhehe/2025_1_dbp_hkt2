import Api from "@services/api";
import { AuthResponse } from "src/interface/auth/AuthResponse";
import { LoginRequest } from "src/interface/auth/LoginRequest";

export async function login(loginRequest: LoginRequest) {
    try {
        const api = await Api.getInstance();
        const response = await api.post<LoginRequest, AuthResponse>(
            loginRequest, { url: "/auth/login" }
        )
        const authData = response.data

        localStorage.setItem("token", authData.data.token)

        return authData
    } catch (error) {
        throw new Error("Login fallido")
    }
}
