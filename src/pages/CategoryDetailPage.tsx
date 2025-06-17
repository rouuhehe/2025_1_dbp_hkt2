import { useEffect, useState } from "react";
import { getExpensesByCategory } from "@/api/expenses";
import { useParams } from "react-router-dom";

type Expense = {
  id: number;
  description: string;
  amount: number;
  date: string;
};

export default function CategoryDetailPage() {
  const { year, month, categoryId } = useParams();
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    if (year && month && categoryId) {
      getExpensesByCategory(+year, +month, +categoryId).then(setExpenses);
    }
  }, [year, month, categoryId]);

  return (
    <div>
      <h2 className="text-xl font-semibold">Detalle de Gastos</h2>
      <ul>
        {expenses.map((e) => (
          <li key={e.id}>
            {e.description} - S/. {e.amount} - {new Date(e.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
