import api from "./client";

export const getExpensesSummary = async () => {
  const response = await api.get("/expenses_summary");
  return response.data;
};

export const getExpensesByCategory = async (
  year: number,
  month: number,
  categoryId: number
) => {
  const response = await api.get("/expenses/detail", {
    params: { year, month, categoryId },
  });
  return response.data;
};
