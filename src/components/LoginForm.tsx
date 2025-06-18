import { LoginRequest } from "../interface/auth/LoginRequest";
import { login } from "../services/auth/login";
import { ChangeEvent, FormEvent, useState } from "react";

export default function LoginForm() {
	const [formData, setFormData] = useState<LoginRequest>({
		email: "",
		passwd: "",
	});

	const [error, setErrorMsg] = useState("");
	const [successMessage, setSuccessMessage] = useState("");


	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			const res = await login(formData);
			setSuccessMessage("¡Sesión iniciada correctamente!");
			setErrorMsg("");
			localStorage.setItem("token", res.data.token);
		} catch (error) {
			setErrorMsg("Correo o contraseña incorrectos.");
			setSuccessMessage("");
		}
	}

	return (
		<section className="">
			<form onSubmit={handleSubmit} className="flex flex-col gap-7">
				<div className="mt-7 flex flex-col">
					<label htmlFor="email"
					className="text-sm font-regular  ml-3 text-neutral-600"
					>Email</label>
					<input 
					type="email" 
					name="email" 
					id="email" 
					className="border border-neutral-500 mt-0.5 rounded-sm p-2 bg-zinc-200 "
					value={formData.email} 
					onChange={handleChange} 
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="password"
					className="text-sm ml-3 text-neutral-600"
					>Contraseña</label>
					<input
						type="password"
						name="passwd"
						id="password"
						className="border mt-0.5  border-neutral-500  rounded-sm p-2 bg-zinc-200"
						value={formData.passwd}
						onChange={handleChange}
					/>
				</div>
				<button id="loginSubmit" className="bg-primary font-bold text-sm  text-white p-2 rounded-full" type="submit">
					Iniciar Sesión
				</button>
			</form>
			{error && <div style={{ color: "red" }}>{error}</div>}
			{successMessage && <div style={{ color: "blue" }}>{successMessage}</div>}
		</section>
	);
}
