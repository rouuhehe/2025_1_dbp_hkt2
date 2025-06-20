import { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
	isLogged: boolean;
	token: string | null;
	login: (token: string) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
	isLogged: false,
	token: null,
	login: () => {},
	logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const storedToken = localStorage.getItem("jwtToken");
		if (storedToken) {
			setToken(storedToken);
		}
	}, []);

	const login = (token: string) => {
		localStorage.setItem("jwtToken", token);
		setToken(token);
	};

	const logout = () => {
		localStorage.removeItem("jwtToken");
		setToken(null);
	};

	return (
		<AuthContext.Provider value={{ isLogged: !!token, token, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
