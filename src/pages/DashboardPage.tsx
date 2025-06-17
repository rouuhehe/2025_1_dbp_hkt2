import { useEffect, useState } from "react";
import { getExpensesSummary } from "../api/expenses";

type SummaryItem = {
  categoryId: number;
  categoryName: string;
  totalAmount: number;
};

export default function DashboardPage() {
  const [summary, setSummary] = useState<SummaryItem[]>([]);

  useEffect(() => {
    getExpensesSummary().then(setSummary);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">Resumen de Gastos</h2>
      <ul>
        {summary.map((item) => (
          <li key={item.categoryId}>
            <button
              className="text-blue-500 underline"
              onClick={() =>
                console.log("Mostrar detalle de categoría", item.categoryId)
              }
            >
              {item.categoryName}
            </button>{" "}
            - S/. {item.totalAmount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
