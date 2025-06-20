export interface ExpenseSummaryItem {
	id: number;
	expenseCategory: {
		id: number;
		name: string;
	};
	year: number;
	month: number;
	amount: number;
}