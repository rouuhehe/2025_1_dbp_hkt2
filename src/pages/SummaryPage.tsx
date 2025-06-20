import ExpensesSummary from "../components/ExpensesSummary";

export default function SummaryPage() {
	return (
		<main className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
			<div className="w-full max-w-3xl">
				<ExpensesSummary />
			</div>
		</main>
	);
}
