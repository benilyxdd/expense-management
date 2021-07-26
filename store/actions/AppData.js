export const SET_MONTHLY_BUDGET_CHANGE = "SET_MONTHLY_BUDGET_CHANGE";

export const setMonthlyBudgetChange = (budget) => {
	return { type: SET_MONTHLY_BUDGET_CHANGE, budget: budget };
};
