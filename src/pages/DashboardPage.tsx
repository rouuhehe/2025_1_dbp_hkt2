import { useEffect, useState } from "react";
import { getExpensesSummary } from "@/api/expenses";
import { useNavigate } from "react-router-dom";

type SummaryItem = {
  categoryId: number;
  categoryName: string;
  totalAmount: number;
};

export default function DashboardPage() {
  const [summary, setSummary] = useState<SummaryItem[]>([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    getExpensesSummary().then(setSummary);
  }, []);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // (0 = enero, +1)

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Resumen de Gastos</h2>
      <ul className="space-y-2">
        {summary.map((item) => (
          <li key={item.categoryId}>
            <button
              className="text-blue-600 hover:underline"
              onClick={() =>
                navigate(`/detalle/${currentYear}/${currentMonth}/${item.categoryId}`)
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
