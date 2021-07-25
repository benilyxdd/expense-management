import {
	// SIMPLE_INPUT_CHANGE,
	RESET_INPUT,
	DETAIL_AMOUNT_CHANGE,
	DETAIL_DESCRIPTION_CHANGE,
} from "../actions/Transactions";

const initialState = {
	// simpleInput: "",
	detailInput: {
		amount: 0,
		description: "",
	},
};

const TransactionsRedcuer = (state = initialState, action) => {
	switch (action.type) {
		// case SIMPLE_INPUT_CHANGE:
		// 	return { ...state, simpleInput: action.input };
		case RESET_INPUT:
			return {
				...state,
				simpleInput: "",
				detailInput: { amount: "", description: "" },
			};
		case DETAIL_AMOUNT_CHANGE:
			return {
				...state,
				detailInput: {
					...state.detailInput,
					amount: action.input,
				},
			};
		case DETAIL_DESCRIPTION_CHANGE:
			return {
				...state,
				detailInput: {
					...state.detailInput,
					description: action.input,
				},
			};
		default:
			return state;
	}
};

export default TransactionsRedcuer;
