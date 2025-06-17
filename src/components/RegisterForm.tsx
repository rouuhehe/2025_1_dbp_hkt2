import { useState } from "react";
import { register } from "@services/auth/register";
import { RegisterRequest } from "../interface/auth/RegisterRequest";

export default function RegisterForm() {
  const [formData, setFormData] = useState<RegisterRequest>({
    email: "",
    passwd: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await register(formData);
      setSuccess(true);
      setError("");
      window.location.href = "/login";
    } catch (err: any) {
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="password"
        name="passwd"
        placeholder="Contraseña"
        value={formData.passwd}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
      />
      <button
        onClick={handleRegister}
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
      >
        Registrarse
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">Registro exitoso</p>}
    </div>
  );
}
