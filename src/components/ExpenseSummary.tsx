import { useEffect, useState } from "react";

interface ExpenseSummary {
  category: string;
  total: number;
}

export default function ExpenseSummary() {
  const [summary, setSummary] = useState<ExpenseSummary[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No se encontró el token.");

        const response = await fetch("http://198.211.105.95:8080/expenses_summary", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Error al obtener el resumen de gastos");

        const data = await response.json();
        setSummary(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📊 Resumen de Gastos</h2>
      {error && <p className="text-red-500">{error}</p>}
      {summary.length === 0 && !error && <p>Cargando...</p>}
      <ul className="space-y-2">
        {summary.map((item, index) => (
          <li key={index} className="flex justify-between bg-gray-100 px-4 py-2 rounded-md">
            <span>{item.category}</span>
            <span>S/. {item.total.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
