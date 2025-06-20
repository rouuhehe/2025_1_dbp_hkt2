import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

type SummaryItem = {
	id: number;
	expenseCategory: {
		id: number;
		name: string;
	};
	year: number;
	month: number;
	amount: number;
};

export default function ExpensesSummary() {
	const [summary, setSummary] = useState<SummaryItem[]>([]);
	const [error, setError] = useState("");

	const { token } = useContext(AuthContext);

	useEffect(() => {
		const fetchSummary = async () => {
			try {
				if (!token) throw new Error("Token no encontrado");

				const res = await fetch("http://198.211.105.95:8080/expenses_summary", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				if (!res.ok) {
					throw new Error(`Error al obtener resumen: ${res.status}`);
				}

				const data = await res.json();
				setSummary(data);
			} catch (err) {
				console.error("Error al cargar gastos:", err);
				setError("No se pudo cargar el resumen de gastos.");
			}
		};

		fetchSummary();
	}, [token]);

	return (
		<div className="p-6 bg-white rounded-xl shadow-md max-w-3xl mx-auto mt-8">
			<h2 className="text-2xl font-bold mb-6 text-center">📊 Resumen de Gastos</h2>

			{error && (
				<p className="text-red-600 text-center mb-4">{error}</p>
			)}

			{summary.length === 0 && !error ? (
				<p className="text-gray-500 text-center">Cargando datos...</p>
			) : (
				<ul className="space-y-4">
					{summary.map((item) => (
						<li
							key={item.id}
							className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
						>
							<div>
								<p className="text-lg font-semibold">{item.expenseCategory.name}</p>
								<p className="text-sm text-gray-500">
									{item.month}/{item.year}
								</p>
							</div>
							<span className="text-blue-700 font-bold text-lg">
								S/. {item.amount.toFixed(2)}
							</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
