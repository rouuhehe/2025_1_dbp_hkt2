import { ChangeEvent, FormEvent, useState } from "react";
import { register } from "../services/auth/register";
import { RegisterRequest } from "../interface/auth/RegisterRequest";

type RegisterFormProps = {
  formData: RegisterRequest;
  setFormData: React.Dispatch<React.SetStateAction<RegisterRequest>>;
};

export default function RegisterForm({ formData, setFormData }: RegisterFormProps) {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError("");
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (formData.passwd.length < 12) {
              setError("La contraseña debe tener al menos 12 caracteres");
              setLoading(false);
              return;
            }

            await register(formData);
            setSuccess(true);
            setError("");

            setTimeout(() => {
                window.location.href = "/authentication/login";
            }, 2000);

        } catch (err) {
          console.error("Error en el registro:", err);

          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("Ocurrió un error inesperado.");
          }
          setSuccess(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                        Email
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded mt-1"
                            required
                        />
                    </label>
                </div>
                
                <div>
                    <label htmlFor="passwd" className="block mb-1 font-medium">
                        Contraseña (mín. 12 caracteres)
                        <input
                            type="password"
                            id="passwd"
                            name="passwd"
                            value={formData.passwd}
                            onChange={handleChange}
                            className="w-full p-2 border rounded mt-1"
                            required
                            minLength={12}
                        />
                    </label>
                </div>
                
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 px-4 rounded text-white ${
                        loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                >
                    {loading ? 'Registrando...' : 'Registrarse'}
                </button>
            </form>
            
            {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}
            
            {success && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
                    ¡Registro exitoso! Redirigiendo...
                </div>
            )}
        </div>
    );
}