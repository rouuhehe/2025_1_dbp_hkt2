import Api from "@services/api";
import { RegisterRequest } from "src/interface/auth/RegisterRequest";

export async function register(registerRequest: RegisterRequest) {
    try {
        const api = await Api.getInstance();
        await api.post<RegisterRequest, void>(
            registerRequest, { url: "/auth/register" }
        )
    } catch (error) {
        throw new Error("Registro fallido")
    }
}
