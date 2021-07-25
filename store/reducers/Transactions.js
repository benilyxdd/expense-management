import { SIMPLE_INPUT_CHANGE } from "../actions/Transactions";

const initialState = {
	simpleInput: "",
};

const TransactionsRedcuer = (state = initialState, action) => {
	switch (action.type) {
		case SIMPLE_INPUT_CHANGE:
			return { ...state, simpleInput: action.input };
		default:
			return state;
	}
};

export default TransactionsRedcuer;
