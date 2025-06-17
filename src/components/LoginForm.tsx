import { useState } from "react";
import { login } from "@services/auth/login";
import { LoginRequest } from "../interface/auth/LoginRequest";
import { AuthResponse } from "../interface/auth/AuthResponse";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const loginRequest: LoginRequest = {
                email,
                passwd: password,
            };

            const authResponse: AuthResponse = await login(loginRequest);

            localStorage.setItem("token", authResponse.data.token);
            localStorage.setItem("email", authResponse.data.email);

            window.location.href = "/dashboard";
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>Login Form</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
    );    
}