export interface AuthResponse {
    status: number
    message: string
    data: { token: string, email: string }
}
