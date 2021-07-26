import { SET_MONTHLY_BUDGET_CHANGE } from "../actions/AppData";

const initialState = {
	setMonthlyBudgetAmount: "",
};

const AppDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MONTHLY_BUDGET_CHANGE:
			return { ...state, setMonthlyBudgetAmount: action.budget };
		default:
			return state;
	}
};

export default AppDataReducer;
