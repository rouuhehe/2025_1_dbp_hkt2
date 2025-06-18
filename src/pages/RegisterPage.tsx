import { useState } from "react";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {

    const [formData, setFormData] = useState({
        email: "",
        passwd: ""
    })

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Registrarse</h1>
        <RegisterForm 
        formData={formData}
        setFormData={setFormData}/>
      </div>
    </main>
  );
}
