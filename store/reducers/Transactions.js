import { SIMPLE_INPUT_CHANGE, RESET_INPUT } from "../actions/Transactions";

const initialState = {
	simpleInput: "",
};

const TransactionsRedcuer = (state = initialState, action) => {
	switch (action.type) {
		case SIMPLE_INPUT_CHANGE:
			return { ...state, simpleInput: action.input };
		case RESET_INPUT:
			return { ...state, simpleInput: "" };
		default:
			return state;
	}
};

export default TransactionsRedcuer;
